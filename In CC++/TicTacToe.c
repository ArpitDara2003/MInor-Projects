#include<stdio.h>
#include<stdlib.h>

void func(char (*a)[3]){
    for (int i = 0; i < 3; i++){
        switch(i){
            case 0:printf("   |   |   \n");
                break;
            default:printf("___|___|___\n   |   |   \n");
                break;           
        }  
        for (int j = 0; j < 3; j++){
            if(j==0||j==1)
            printf(" %c |",a[i][j]);
            else
            printf(" %c \n",a[i][j]);
        }  
    }
    printf("\n\n");      
}
void move(char (*x)[3]){
    int a,b;
    printf("Enter cooordinates(x,y):\nx = ");
    scanf("%d",&a);
    printf("y = ");
    scanf("%d",&b);
    if (x[--b][--a]==' ')
    x[b][a]='O';
    else{
    printf("Occupied!!!");
    move(x);
    }
    func(x);
}
void Cmove(char (*z)[3]){
    int x,y;
    level1:
    x = rand()%3;
    y = rand()%3;
    if (z[y][x]==' ')
    z[y][x] = 'X';
    else{
      goto level1;
    }
    func(z);
}
int wincheck(char mat[][3]){
    int w=0;
    if(mat[0][0]==mat[1][1]&&mat[1][1]==mat[2][2]){
        if (mat[0][0]=='X')
        w=1;
        else if(mat[0][0]=='O')
        w=2;
    }
    else if(mat[2][0]==mat[1][1]&&mat[1][1]==mat[0][2]){
        if (mat[2][0]=='X')
        w=1;
        else if(mat[2][0]=='O')
        w=2;
    }
    else if(mat[0][0]==mat[0][1]&&mat[0][1]==mat[0][2]){
        if (mat[0][0]=='X')
        w=1;
        else if(mat[0][0]=='O')
        w=2;
    }
    else if(mat[1][0]==mat[1][1]&&mat[1][1]==mat[1][2]){
        if (mat[1][0]=='X')
        w=1;
        else if(mat[1][0]=='O')
        w=2;
    }
    else if(mat[2][0]==mat[2][1]&&mat[2][1]==mat[2][2]){
        if (mat[2][0]=='X')
        w=1;
        else if(mat[2][0]=='O')
        w=2;
    }
    else if(mat[0][0]==mat[1][0]&&mat[1][0]==mat[2][0]){
        if (mat[0][0]=='X')
        w=1;
        else if(mat[0][0]=='O')
        w=2;
    }
    else if(mat[0][1]==mat[1][1]&&mat[1][1]==mat[2][1]){
        if (mat[0][1]=='X')
        w=1;
        else if(mat[0][1]=='O')
        w=2;
    }
    else if(mat[0][2]==mat[1][2]&&mat[1][2]==mat[2][2]){
        if (mat[0][2]=='X')
        w=1;
        else if(mat[0][2]=='O')
        w=2;
    }
    else{
        w=0;
    }
    return w;
}
int main(){
    int a,b,w=0,x,y;
    char mat[3][3]={
        {' ',' ',' '},
        {' ',' ',' '},
        {' ',' ',' '}

    };
   
    level2: 
    if(w==0){
        //Player's  move.
        move(mat);    
        w = wincheck(mat);
        if(w==0){
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++){
                    if(mat[i][j] ==' '){
                    //Computer's move.
                    Cmove(mat);
                    w = wincheck(mat);
                    goto level2; 
                    }
                }
                w==3;                
            }
        }          
    }
    
    switch(w){
        case 1: printf("Computer Wins!!!\n"); break;
        case 2: printf("You Win!!!\n"); break;
        case 3: printf("Match Was A Tie!!!\n");break;
    } 
    return 0;    
}

