#include <unistd.h>
#include <string.h>

// Made so that I only need fd_write to get console output
void print_str(const char* s) {
    write(STDOUT_FILENO, s, strlen(s));
}

int main(int argc, char** argv) {
    for(int i = 0; i < argc; i++) {
        print_str(argv[i]);
    }
    return 0;
}