#include <pthread.h>
#include <unistd.h>
#include <string.h>

// Made so that I only need fd_write to get console output
void print_str(const char* s) {
    write(STDOUT_FILENO, s, strlen(s));
}

void print_ch(const char c) {
    write(STDOUT_FILENO, &c, 1);
}

int main() {
    //
}
