const SUPABASE_URL = "https://rdotaozformsjztuybrn.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_Nia2bjlrGRyuO96tZxZvNQ_BdG6OnrN";

const { createClient } = supabase;

const client = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

function openStudents() {
  alert("إدارة الطلاب جاهزة للربط بقاعدة البيانات.");
}

function openCourses() {
  alert("إدارة الكورسات جاهزة.");
}

function openVideos() {
  alert("إدارة الفيديوهات جاهزة.");
}

function openResults() {
  alert("النتائج جاهزة.");
}
