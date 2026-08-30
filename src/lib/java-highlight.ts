/**
 * A deliberately small Java highlighter that runs at build time and emits
 * spans coloured from the site's own tokens. Pulling in a full highlighting
 * theme would drag a foreign palette into a design whose colours were
 * derived from Java syntax in the first place — and one more dependency.
 */

const KEYWORDS = new Set([
  'abstract', 'assert', 'boolean', 'break', 'byte', 'case', 'catch', 'char',
  'class', 'const', 'continue', 'default', 'do', 'double', 'else', 'enum',
  'extends', 'final', 'finally', 'float', 'for', 'goto', 'if', 'implements',
  'import', 'instanceof', 'int', 'interface', 'long', 'native', 'new',
  'package', 'private', 'protected', 'public', 'return', 'short', 'static',
  'strictfp', 'super', 'switch', 'synchronized', 'this', 'throw', 'throws',
  'transient', 'try', 'void', 'volatile', 'while', 'var', 'record', 'sealed',
  'true', 'false', 'null',
]);

const TOKEN =
  /(\/\*[\s\S]*?\*\/)|(\/\/[^\n]*)|("(?:\\.|[^"\\])*")|('(?:\\.|[^'\\])*')|(@[A-Za-z_$][\w$]*)|(\b\d[\d_]*(?:\.\d[\d_]*)?[fFdDlL]?\b)|([A-Za-z_$][\w$]*)/g;

const escapeHtml = (s: string): string =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const wrap = (cls: string, text: string): string =>
  `<span class="${cls}">${escapeHtml(text)}</span>`;

export function highlightJava(source: string): string {
  let out = '';
  let last = 0;

  for (const m of source.matchAll(TOKEN)) {
    const i = m.index ?? 0;
    out += escapeHtml(source.slice(last, i));
    last = i + m[0].length;

    const [, block, line, str, chr, annotation, num, ident] = m;

    if (block || line) out += wrap('tk-comment', m[0]);
    else if (str || chr) out += wrap('tk-string', m[0]);
    else if (annotation) out += wrap('tk-annotation', m[0]);
    else if (num) out += wrap('tk-number', m[0]);
    else if (ident) {
      if (KEYWORDS.has(ident)) out += wrap('tk-keyword', ident);
      else if (/^[A-Z]/.test(ident)) out += wrap('tk-type', ident);
      else out += escapeHtml(ident);
    } else out += escapeHtml(m[0]);
  }

  out += escapeHtml(source.slice(last));
  return out;
}
