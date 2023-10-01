function make_shirt(size: string = "Large", message: string = "I love Typescript") {

    console.log(`This is a ${size.toLowerCase()}-sized shirt with the message: "${message}".`);
}

// Large shirt with the default message
make_shirt();
// Medium shirt with the default message
make_shirt("Medium");
// Small shirt with a different message
make_shirt("Small", "Keep calm and code on");