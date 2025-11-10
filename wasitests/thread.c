#include <pthread.h>
#include <unistd.h>
#include <string.h>

void* thread(void* ptr) {
    char* msg = "thread!\n";
    write(STDOUT_FILENO, msg, strlen(msg));
}

int main() {
    pthread_t the_thread;
    pthread_create(&the_thread, NULL, thread, NULL);
    pthread_join(the_thread, NULL);
    return 0;
}