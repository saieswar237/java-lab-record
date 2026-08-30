export interface Experiment {
  week: number;
  title: string;
  aim: string;
  concepts: string[];
  pdf: string;
  /** Page count of the bound record, shown in the mobile fallback card. */
  pages?: number;
  sourceCode?: string;
  sampleOutput?: string;
}

export const labInfo = {
  student: 'Singareni Sai Eswar',
  rollNumber: '25EU02122',
  labName: 'Java Lab',
  courseCode: '24CS281',
  institution: 'Siddhartha Academy of Higher Education',
  instructor: 'Ramesh',
} as const;

export const experiments: Experiment[] = [
  {
    week: 1,
    title: 'Language Comparison and Java Installation',
    aim: 'To compare Java with C, C++, Python and JavaScript across language attributes, then install the JDK on Windows, configure JAVA_HOME and the PATH variable, and compile and run a first Hello World program.',
    concepts: ['WORA', 'JVM', 'JDK', 'OpenJDK', 'javac', 'JAVA_HOME', 'PATH'],
    pdf: 'week-01.pdf',
    pages: 10,
    sourceCode: `public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`,
    sampleOutput: `Hello World`,
  },
  {
    week: 2,
    title: 'Basic Java Concepts, Data Types and Control Statements',
    aim: 'To write and execute fifteen introductory programs covering the primitive data types, variables, arithmetic on integers and floating-point numbers, character and Unicode values, widening conversion and narrowing casting, reserved keywords, and the if-else and for control statements.',
    concepts: [
      'primitive types',
      'variables',
      'type conversion',
      'type casting',
      'if-else',
      'for loop',
      'reserved keywords',
    ],
    pdf: 'week-02.pdf',
    pages: 7,
  },
  {
    week: 3,
    title: 'Class Fundamentals, Objects and Methods',
    aim: 'To define classes with fields and methods, declare and instantiate objects with new, build and populate an array of objects, observe how object reference variables are assigned and compared, and write methods that accept arguments and return results.',
    concepts: ['class', 'object', 'new', 'reference variables', 'methods', 'array of objects'],
    pdf: 'week-03.pdf',
    pages: 9,
    sourceCode: `class Student {
    int rollNo;
    String name;
    String branch;
    double cgpa;
    void display() {
        System.out.println("Roll Number: " + rollNo);
        System.out.println("Name: " + name);
        System.out.println("Branch: " + branch);
        System.out.println("CGPA: " + cgpa);
    }
}
public class StudentInfo {
    public static void main(String[] args) {
        Student s = new Student();
        s.rollNo = 101;
        s.name = "Raina";
        s.branch = "CSE-AIML";
        s.cgpa = 9.2;
        s.display();
    }
}`,
    sampleOutput: `Roll Number: 101
Name: Raina
Branch: CSE-AIML
CGPA: 9.2`,
  },
  {
    week: 4,
    title: 'Constructors, the this Keyword and Garbage Collection',
    aim: 'To create default and parameterised constructors, overload them for different argument lists, chain them together, use this to separate fields from parameters, and observe when an object becomes eligible for garbage collection.',
    concepts: [
      'constructor',
      'constructor overloading',
      'this',
      'constructor chaining',
      'garbage collection',
    ],
    pdf: 'week-04.pdf',
    pages: 7,
    sourceCode: `class Student {
    String name;
    int rollNo;
    Student() {
        name = "Unknown";
        rollNo = 0;
    }
    Student(String name, int rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    void display() {
        System.out.println("Name: " + name);
        System.out.println("Roll Number: " + rollNo);
    }
}
public class StudentConstructor {
    public static void main(String[] args) {
        Student s1 = new Student();
        Student s2 = new Student("Raina", 101);
        System.out.println("Default Constructor:");
        s1.display();
        System.out.println("\\nParameterized Constructor:");
        s2.display();
    }
}`,
    sampleOutput: `Default Constructor:
Name: Unknown
Roll Number: 0

Parameterized Constructor:
Name: Raina
Roll Number: 101`,
  },
  {
    week: 5,
    title: 'Method Overloading, Objects as Parameters and Returning Objects',
    aim: 'To overload methods on argument count and type, pass whole objects into methods as parameters, compare two objects inside a method, and return an object from a method back to the caller.',
    concepts: ['method overloading', 'objects as parameters', 'returning objects', 'method signature'],
    pdf: 'week-05.pdf',
    pages: 7,
    sourceCode: `class Calculator {
    int add(int a, int b) {
        return a + b;
    }
    int add(int a, int b, int c) {
        return a + b + c;
    }
    double add(double a, double b) {
        return a + b;
    }
}
public class ArithmeticOverloading {
    public static void main(String[] args) {
        Calculator c = new Calculator();
        System.out.println("Two integers: " + c.add(10, 20));
        System.out.println("Three integers: " + c.add(10, 20, 30));
        System.out.println("Two doubles: " + c.add(10.5, 20.5));
    }
}`,
    sampleOutput: `Two integers: 30
Three integers: 60
Two doubles: 31.0`,
  },
  {
    week: 6,
    title: 'static, final, Nested and Inner Classes',
    aim: 'To share state across every instance with static variables and call methods without an object, lock values and behaviour with final, and declare static nested classes and inner classes that are instantiated through an enclosing object.',
    concepts: ['static', 'final', 'blank final', 'nested class', 'inner class'],
    pdf: 'week-06.pdf',
    pages: 9,
    sourceCode: `class Parent {
    final int VALUE = 100;
    final void display() {
        System.out.println("This is a final method.");
        System.out.println("Final variable: " + VALUE);
    }
}
final class FinalClass {
    void show() {
        System.out.println("This is a final class.");
    }
}
public class FinalDemo {
    public static void main(String[] args) {
        Parent p = new Parent();
        p.display();
        FinalClass f = new FinalClass();
        f.show();
    }
}`,
    sampleOutput: `This is a final method.
Final variable: 100
This is a final class.`,
  },
  {
    week: 7,
    title: 'String Handling',
    aim: 'To create strings with the available String constructors and compare literals against objects made with new, then modify text in place with StringBuffer and split a sentence into tokens with StringTokenizer.',
    concepts: ['String', 'string pool', 'equals vs ==', 'StringBuffer', 'StringTokenizer'],
    pdf: 'week-07.pdf',
    pages: 5,
    sampleOutput: `Enter a sentence: Java is easy to learn
Tokens:
Java
is
easy
to
learn
Total number of tokens: 5`,
  },
  {
    week: 8,
    title: 'Inheritance and Polymorphism',
    aim: 'To extend a base class into subclasses, reach the parent with super, build single and multilevel hierarchies, override inherited methods, and dispatch a call to the correct override at run time through a parent reference.',
    concepts: [
      'extends',
      'super',
      'single inheritance',
      'multilevel inheritance',
      'method overriding',
      'dynamic method dispatch',
    ],
    pdf: 'week-08.pdf',
    pages: 14,
    sourceCode: `class Shape {
    void draw() {
        System.out.println("Drawing a shape");
    }
}
class Circle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a Circle");
    }
}
class Rectangle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a Rectangle");
    }
}
class Triangle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a Triangle");
    }
}
public class Dynamic {
    public static void main(String[] args) {
        Shape shape;
        shape = new Circle();
        shape.draw();
        shape = new Rectangle();
        shape.draw();
        shape = new Triangle();
        shape.draw();
    }
}`,
    sampleOutput: `Drawing a Circle
Drawing a Rectangle
Drawing a Triangle`,
  },
];

export const totalWeeks = experiments.length;

export const getExperiment = (week: number): Experiment | undefined =>
  experiments.find((e) => e.week === week);
