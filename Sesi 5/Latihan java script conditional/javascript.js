function hitung2_grade(nilai) {
    let grade = ""
    if (nilai >= 89 && nilai <= 100) {
        grade = "A"
    } else if (nilai >= 79 && nilai <= 88) {
        grade = "B"
    }else if (nilai >= 69 && nilai <= 78) {
        grade = "C"
    }else if (nilai >= 59 && nilai <= 68) {
        grade = "D"
    }else if (nilai >= 1 && nilai <= 58) {
        grade = "E"
    } else {
        grade = "Tidak valid"
    }  
    return grade
    
}