#include <stdio.h>
#include <unistd.h>
#include <fcntl.h>
#include <string.h>

int main() {
    char* test_msg = "Hello, world!\n";
    write(STDOUT_FILENO, test_msg, strlen(test_msg));
    setbuf(stdout, NULL);
    setbuf(stderr, NULL);
    int fd = open("beans.txt", (O_CREAT | O_RDWR | O_TRUNC), 0777);
    if(fd == -1) {
        perror("beans.txt");
        return 1;
    }
    printf("FD: %d\n", fd);
    close(fd);
    return 0;
}