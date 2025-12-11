import java.util.*;

class ATM {
    public int account =1000;
    public static Scanner s =new Scanner(System.in);

    public void Deposit() {
       
        System.out.println("Ener the amount to Deposit: ");
        int n =s.nextInt();
        account += n;
        System.out.println("Amount is credited successfully.");
      

    }

    public void Debit() {
        int num;
        System.out.println("please enter money to withdraw: ");
        num = s.nextInt();
        if (account == 0) {
            System.out.println("Sorry, your account has a zero balance.");
        } else if (account < num) {
            System.out.println("Insufficient balance.");
        } else {
            account -= num;
            System.out.println("The amount is debited successfully.");
        }
    }

    public void showbalance() {
        System.out.println("The current balance is: " + account);
    }

    public static void main(String[] args) {
      
        String pass = "1234";
        String inputpass;

        System.out.println("Please enter the password to make transactions.");

        // Password validation loop
        int i = 0;
        while (i<5) {
            System.out.println("Enter the password (1-5 attempts): ");
            inputpass = s.nextLine();

            if (inputpass.equals(pass)) {
                System.out.println("Access granted. Welcome!");
                break;
            } else {
                System.out.println("Incorrect password. Try again.");
                if (i == 4) {
                    System.out.println("Access denied. Too many incorrect attempts.");
                    return;
                }
                System.out.println("You have " + (4 - i) + " attempts left.");
            }
                i++;
            }
        }

        ATM acc = new ATM();

        // ATM menu
        while(true){
        System.out.println("Welcome to the ATM machine.");
        System.out.println("Enter your choice:");
        System.out.println("1. Deposit money");
        System.out.println("2. Debit money");
        System.out.println("3. Check current balance");
        System.out.println("4.____Exit ____");
    
        int choice = s.nextInt();
        switch (choice) {
            case 1 -> acc.Deposit();
            case 2 -> acc.Debit();
            case 3 -> acc.showbalance();
            case 4 -> {
                System.out.println("thank for using the ATM have good day bye!");
                s.close();
                return;

            }
            default -> System.out.println("You entered an invalid choice.");
        }
      
    }
       
    }
}



// The code is an ATM simulation program in Java. It allows users to deposit, withdraw, and check their account balance, with a password protection feature for security. The program uses a loop for the ATM menu and provides feedback for invalid inputs and insufficient balance. The user has 5 attempts to enter the correct password before access is denied.