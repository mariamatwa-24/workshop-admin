const SUPABASE_URL = "https://rdotaozformsjztuybrn.supabase.co";
const SUPABASE_KEY = "sb_publishable_Nia2bjlrGRyuO96tZxZvNQ_BdG6OnrN";

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
      alert("جدول الطلاب فارغ حاليًا. أضيفي أول طالب من Supabase.");
      return;
    }

    let message = "👥 الطلاب:\n\n";

    data.forEach((student, index) => {
      message += ${index + 1}. ${student.name || "بدون اسم"}\n;
      if (student.email) {
        message += البريد: ${student.email}\n;
      }
      message += "\n";
    });

    alert(message);

  } catch (error) {
    console.error(error);
    alert("تعذر الاتصال بقاعدة البيانات.");
  }
}

function openCourses() {
  alert("إدارة الكورسات سنربطها بجدول courses.");
}

function openVideos() {
  alert("إدارة الفيديوهات سنربطها بجدول lessons.");
}

function openResults() {
  alert("إدارة النتائج سنربطها بجدول results.");
}
