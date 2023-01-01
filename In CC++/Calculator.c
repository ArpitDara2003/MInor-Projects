#include <stdio.h>
#include <stdlib.h>
#include <math.h>



    

int main()
{
    double x;
    double y;
    char opr;
    printf("Enter the first Number:");
    scanf("%lf",&x);
    printf("Enter th oprater(+,-,*,/,^):");
    scanf(" %c", &opr);
    printf("Enter the second number:");
    scanf("%lf", &y);

    if (opr == '*'){
        printf("%f", x * y);
    }else if (opr == '/'){
        printf("%f", x / y);
    }else if (opr == '+'){
        printf("%f", x + y);
    }else if (opr == '-'){
        printf("%f", x - y);
    }else if (opr == '^'){
        printf("%f", pow(x,y)); 
    }else{
        printf("Error");
    }

  
  return 0;
}