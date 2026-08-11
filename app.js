const SUPABASE_URL = "https://rdotaozformsjztuybrn.supabase.co";
const SUPABASE_KEY = "YOUR_PUBLISHABLE_KEY";

const { createClient } = supabase;

const client = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

async function openStudents() {
  try {
    const { data, error } = await client
      .from("students")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error(error);
      alert("حدث خطأ أثناء تحميل الطلاب.");
      return;
    }

    if (!data || data.length === 0) {
      alert("جدول الطلاب فارغ حاليًا.");
      return;
    }

    let message = "👥 الطلاب:\n\n";

    data.forEach((student, index) => {
      message += ${index + 1}. ${student.name || "بدون اسم"}\n\n;
    });

    alert(message);

  } catch (error) {
    console.error(error);
    alert("تعذر الاتصال بقاعدة البيانات.");
  }
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
