let Index = 0

function Slide(direction) {
    const slides = document.querySelector(".content__slide")
    const totalSlides = document.querySelectorAll(".slide__box").length

    // อัปเดตตำแหน่ง Index
    Index += direction

    // วนกลับไปสไลด์แรกหรือสุดท้าย
    if (Index < 0) {
        Index = totalSlides - 1
    } else if (Index >= totalSlides) {
        Index = 0
    }

    // เลื่อนภาพโดยใช้ Transform
    slides.style.transform = `translateX(-${Index * 100}%)`
}
