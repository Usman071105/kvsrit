import java.util.*;

class AnimationThread extends Thread {
    public void run() {
        String[] spinner = {  "\\","$","/","#","\\","*", };
        int i = 0;
        while (i < 10) {
            System.out.print("\rWorking on it " + spinner[i % 4]);
            try {
                Thread.sleep(800);
            } catch (InterruptedException e) {
                break;
            }
            i++;
        }
        System.out.print("\r                       \r");
    }
}

class LiftPro {
    public static Scanner s = new Scanner(System.in);
    public static int currentFloor = -1; // start undefined

    public void goToFloor(int floor) {
        AnimationThread anim = new AnimationThread();
        anim.start();

        try {
            anim.join(); // wait for animation
        } catch (InterruptedException e) {
            System.out.println("Animation interrupted.");
        }

        switch (floor) {
            case 0 -> System.out.println("We are on the Ground Floor ->>>>>>>>");
            case 1 -> {
                
                System.out.println("We are on the First Floor ->>>>>>>>");
            }
            case 2 -> {
               
                System.out.println("We are on the Second Floor ->>>>>>>>");
            }
            case 3 -> System.out.println("We are on the Third Floor ->>>>>>>>");
            case 4 -> System.out.println("We are on the Fourth Floor ->>>>>>>>");
            default -> System.out.println("Invalid floor.");
        }

        currentFloor = floor;
    }

    private void sleep(int ms) {
        try {
            Thread.sleep(ms);
        } catch (InterruptedException e) {
            System.out.println("Sleep interrupted.");
        }
    }

    public static void main(String[] args) {
        LiftPro lift = new LiftPro();

        while (true) {
            System.out.println("\nHey, enter the floor you want to go to:");
            System.out.println("0. Ground Floor\n1. First Floor\n2. Second Floor\n3. Third Floor\n4. Fourth Floor\n5. Exit");

            int choice;
            try {
                choice = s.nextInt();
            } catch (InputMismatchException e) {
                System.out.println("Please enter a valid number.");
                s.nextLine(); // clear buffer
                continue;
            }

            if (choice == 5) {
                System.out.println("Thank you for using the lift 🚀");
                break;
            }

            if (choice < 0 || choice > 4) {
                System.out.println("⚠️ Invalid floor number! Try again.");
                continue;
            }

            if (choice == currentFloor) {
                System.out.println("You are already on this floor."+ currentFloor);
                continue;
            }

            lift.goToFloor(choice);
        }
    }
}
