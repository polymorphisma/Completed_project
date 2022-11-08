/*hangman project*/

#include <stdio.h>
#include <conio.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>

int hangman(char const *option[22]);
int yes_or_no();


int main(){
	
	printf("\t\t\t\tWelcome to the 'HANGMAN' game.\n");
	printf("\t\t\t\tPress any key to start.");
	
	getch();
	
	char y_n;
//	char print_v/alue;
	char const *option[22] = {"perfect","tuesday","country","pumpkin","special","freedom","picture","husband",
							"monster","nothing","forever","madison","welcome","revenge","science","problem",
							"dancing","imagine","natural","captain","healthy","massage"};
	


	hangman(option);

	y_n = yes_or_no();	
	
	while(true){

		if(y_n == 'n'){
			
			system("cls");
			printf("\nThanks for playing.");
			printf("\nHave a good day.");
			break;
			
		}else if(y_n == 'y'){
			system("cls");
			printf("\n");
			hangman(option);
			y_n = yes_or_no();
			continue;
			
		}else if(y_n == 'x'){
			system("cls");			
			printf("\nSorry i didn't understand please try again.\n");

			y_n = yes_or_no();
			continue;
			
		}
	}
}

int hangman(char const *option[22]){

	char const *word;		
	srand(time(NULL));
	word = option[rand()%22];
	
	system("cls");	
//	printf("%s",word);	
	
	char inp;
	char b[10];
	char underscore = '_';
	int len,remain_life = 0,flag=0;
	int corr = 0;
	
	len = strlen(word);
	


	
	printf("\n\n\n");
	printf("\t\t\t\t** HANGMAN **\n\n");
	printf("\t\t\t\t*************\n");
	printf("\t\t\t\t.............\n");
	printf("\t\t\t\t");
	
	for(int j=0;j<len;j++){
		if(j==0 || j == 3 || j == 6){
			printf("%c ",word[j]);
		}else{

			printf("%c ",underscore);
			b[j] = underscore;
		}
	}
	printf("\n\t\t\t\t.............\n");
	printf("\t\t\t\t*************\n");
	

	while(remain_life < 5){
		flag = 0;
		printf("Enter your guess:");
		inp = getche();
		
		for(int i=1;i<len-1;i++){
			if(i==3){
				continue;
			}
			else if(inp == word[i]){
				b[i] = inp;
				flag=1;
				corr++;
			}
			
		}
		
		system("cls");
		printf("\n\n\n");
		printf("\t\t\t\t** HANGMAN **\n\n");
		printf("\t\t\t\t*************\n");
		printf("\t\t\t\t.............\n");
		printf("\t\t\t\t");
		for(int i=0;i<len;i++){
			if(i==0 || i==3|| i==6){
				printf(" %c",word[i]);
			}else{
				printf(" %c",b[i]);
			}
		}

		printf("\n\t\t\t\t.............\n");
		printf("\t\t\t\t*************\n");
		
		if(flag == 0){
			remain_life++;
			printf("\t\t\t\t%c is worng guess.\n",inp);
			printf("\t\t\t\t(%d chance remaining.)\n\n\n",5-remain_life);
		
		}else{
			printf("\t\t\t\t%c is the right character.\n",inp);
			printf("\t\t\t\t(%d word to go.)\n\n\n",(len-3)-corr);
		}
		
		if(corr==len-3){
			break;
		}
	
	

	}
	if(corr==len-3){
		printf("You have won the game.\n");
	}else{

		printf("Sorry you lost the game.\nYou have been hanged.\nThe answer was %s.\n",word);
	}

}

int yes_or_no(){
	
	char inp_y_n;
	
	printf("Do you want to play again(y/n):");
	inp_y_n = getche();
	
	
	if(inp_y_n == 'y'){
		return 'y';
	}else if(inp_y_n == 'n'){
		return 'n';
	}else{
		return 'x';
	}
}

