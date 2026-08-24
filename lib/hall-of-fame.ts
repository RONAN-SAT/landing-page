export type HofEntry = {
  slug: string;
  name: string;
  score: number;
  detail: string;
  date: string;
  school: string;
  src: string;
};

export const hallOfFame: HofEntry[] = [
  {
    slug: "nguyen-minh-trang",
    name: "Nguyễn Minh Trang",
    score: 1580,
    detail: "Verbal 780 · Maths 800 · Perfect Scorer",
    date: "March SAT '26",
    school: "THPT Chuyên Hùng Vương",
    src: "/hall-of-fame/nguyen-minh-trang.jpg",
  },
  {
    slug: "dinh-ha-linh",
    name: "Đinh Hà Linh",
    score: 1570,
    detail: "800M · 770RW · Perfect Scorer",
    date: "March SAT '26",
    school: "THPT Chuyên Hà Tĩnh",
    src: "/hall-of-fame/dinh-ha-linh.jpg",
  },
  {
    slug: "luu-thao-nhi",
    name: "Lưu Thảo Nhi",
    score: 1560,
    detail: "760RW · 800M · Perfect Scorer",
    date: "December SAT '25",
    school: "THPT Phan Đình Phùng",
    src: "/hall-of-fame/luu-thao-nhi.jpg",
  },
  {
    slug: "dinh-thanh-ngan",
    name: "Đinh Thanh Ngân",
    score: 1550,
    detail: "750RW · 800M · Perfect Scorer",
    date: "November SAT '25",
    school: "THPT Chuyên Lê Quý Đôn",
    src: "/hall-of-fame/dinh-thanh-ngan.jpg",
  },
  {
    slug: "le-hong-phuc",
    name: "Lê Hồng Phúc",
    score: 1530,
    detail: "800M · 730RW · Perfect Scorer",
    date: "December SAT '25",
    school: "THPT Trần Phú — Hoàn Kiếm",
    src: "/hall-of-fame/le-hong-phuc.jpg",
  },
  {
    slug: "ngo-hoang-gia-nhi",
    name: "Ngô Hoàng Gia Nhi",
    score: 1530,
    detail: "Verbal 770 · Math 760",
    date: "March SAT '26",
    school: "THPT Chuyên Võ Nguyễn Giáp",
    src: "/hall-of-fame/ngo-hoang-gia-nhi.jpg",
  },
  {
    slug: "vu-dinh-long",
    name: "Vũ Đình Long",
    score: 1520,
    detail: "790M · 730RW",
    date: "November SAT '25",
    school: "Vinschool — Grade 12",
    src: "/hall-of-fame/vu-dinh-long.jpg",
  },
  {
    slug: "nguyen-thi-huong-giang",
    name: "Nguyễn Thị Hương Giang",
    score: 1510,
    detail: "770RW · 740M",
    date: "May SAT '26",
    school: "THPT Quảng Xương 1",
    src: "/hall-of-fame/nguyen-thi-huong-giang.jpg",
  },
];
