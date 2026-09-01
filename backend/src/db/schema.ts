import { pgTable, text, integer, doublePrecision, boolean, jsonb, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: text('id').primaryKey(),
  username: text('username').notNull().unique(),
  fullName: text('full_name').notNull(),
  role: text('role').notNull(),
  email: text('email').notNull(),
  password: text('password'),
  avatar: text('avatar'),
  studentCode: text('student_code'),
  faculty: text('faculty'),
  status: text('status').default('ACTIVE'),
  permissions: jsonb('permissions'),
  createdAt: text('created_at'),
});

export const sinhVien = pgTable('sinh_vien', {
  maSV: text('ma_sv').primaryKey(),
  hoTen: text('ho_ten').notNull(),
  avatar: text('avatar'),
  ngaySinh: text('ngay_sinh').notNull(),
  gioiTinh: text('gioi_tinh').notNull(),
  lop: text('lop').notNull(),
  khoa: text('khoa').notNull(),
  soDienThoai: text('so_dien_thoai').notNull(),
  email: text('email').notNull(),
  diaChi: text('dia_chi').notNull(),
  hoSoFile: text('ho_so_file'),
  hoSoFileName: text('ho_so_file_name'),
  hoSoFiles: jsonb('ho_so_files'),
  ngayNhapHoc: text('ngay_nhap_hoc').notNull(),
  trangThai: text('trang_thai').notNull().default('Đang học'),
});

export const monHoc = pgTable('mon_hoc', {
  maMH: text('ma_mh').primaryKey(),
  tenMH: text('ten_mh').notNull(),
  soTinChi: integer('so_tin_chi').notNull(),
  khoaPhuTrach: text('khoa_phu_trach'),
  khoa: text('khoa'),
  loaiMon: text('loai_mon'),
  hocKy: text('hoc_ky'),
  namHoc: text('nam_hoc'),
  lop: text('lop'),
  lePhiThiLai: integer('le_phi_thi_lai'),
  lePhiHocLai: integer('le_phi_hoc_lai'),
});

export const diem = pgTable('diem', {
  id: text('id').primaryKey(),
  maSV: text('ma_sv').notNull(),
  hoTenSV: text('ho_ten_sv'),
  maMH: text('ma_mh').notNull(),
  tenMH: text('ten_mh'),
  soTinChi: integer('so_tin_chi'),
  hocKy: text('hoc_ky').notNull(),
  namHoc: text('nam_hoc').notNull(),
  diemChuyenCan: doublePrecision('diem_chuyen_can').notNull().default(0),
  diemGiuaKy: doublePrecision('diem_giua_ky').notNull().default(0),
  diemCuoiKy: doublePrecision('diem_cuoi_ky').notNull().default(0),
  diemTongKet10: doublePrecision('diem_tong_ket_10').notNull().default(0),
  diemThang4: doublePrecision('diem_thang_4').notNull().default(0),
  diemChu: text('diem_chu').notNull().default('F'),
  trangThai: text('trang_thai').notNull().default('FAILED'),
});

// Additional tables (renLuyen, thoiKhoaBieu, etc.) should be added here
// Keeping focused on the core structure for now
