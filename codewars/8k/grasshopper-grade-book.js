// ------------------------------ Description ------------------------------
// Complete the function so that it finds the average of the three scores passed
// to it and returns the letter value associated with that grade.
// ------------------------------ Solution ------------------------------
function getGrade (s1, s2, s3) {
    const av = (s1 + s2 + s3) / 3;
    switch (true) {
        case 90 <= av && av <= 100: return 'A';
        case 80 <= av && av < 90: return 'B';
        case 70 <= av && av < 80: return 'C';
        case 60 <= av && av < 70: return 'D';
        case 0 <= av && av < 60: return 'F';
    }
}