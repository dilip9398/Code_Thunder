package DAY_1;

import java.util.Scanner;

public class V8 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String code = sc.nextLine();

        int open = code.indexOf('(');
        int close = code.lastIndexOf(')');

        String inside = code.substring(open + 1, close);

        if (inside.charAt(0) == '"') {
            System.out.println(inside.substring(1, inside.length() - 1));

        } else {
            String clean = inside.replaceAll("\\s+", "");

            char op = ' ';
            int opindex = -1;
            if (clean.contains("+")) {
                opindex = clean.indexOf('+');
                op = '+';
            }

            String part1 = clean.substring(0, opindex);
            String part2 = clean.substring(opindex + 1);

            int a = Integer.parseInt(part1);
            int b = Integer.parseInt(part2);

            if (op == '+') {
                System.out.println(a + b);
            }
        }
    }
}
