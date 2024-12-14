import { useTranslations } from "next-intl";
import { sourceSans3 } from "../layout";

export default function BespokePage() {
  const t = useTranslations("Bespoke");
  return (
    <div className="flex flex-col gap-40">
      <div className="flex flex-col items-center justify-center bg-[url('/images/bespoke-banner.jpg')] bg-cover bg-center h-[100vh] text-white text-center">
        <p
          className={`${sourceSans3.className} font-light text-shadow-lg text-5xl uppercase`}
        >
          {t("bannerHeader")}
        </p>
      </div>
      <div className="flex justify-center mx-10">
        <div className="max-w-[50rem]">
          <p
            className={`${sourceSans3.className} font-thin text-4xl uppercase`}
          >
            Hơn 40 năm gìn giữ truyền thống bespoke tại Alabama
          </p>
          <p className="mt-8">be·spoke</p>
          <p>/bəˈspəʊk/</p>
          <p className="italic">(tính từ)</p>
          <ol>
            <li>
              1. Được làm riêng cho một khách hàng hoặc người dùng. “a bespoke
              suit: một bộ vest may đo”
            </li>
            <li>
              2. Chuyên sản xuất hoặc bán các sản phẩm bespoke, đặc biệt là quần
              áo. “bespoke tailors: thợ may đo”
            </li>
          </ol>
          <p className="mt-8">
            Nghề thủ công làm vest bằng tay là sự kết hợp giữa khoa học, nghệ
            thuật và một chút tâm lý học. Yếu tố chung giữa các lĩnh vực này là
            kỹ năng quan sát và thấu hiểu. Chẳng hạn, khách hàng của bạn có
            thường bắt chéo chân không, họ có hay di chuyển trong những bộ vest
            của mình không, họ có chế độ tập luyện như thế nào, họ có chạy bộ
            hay đạp xe không, họ có thường cho tay vào túi quần khi nói chuyện
            không, họ mang theo bao nhiêu điện thoại di động, họ có mang theo vũ
            khí giấu kín không, khán giả của họ là ai, bao gồm cả đồng nghiệp và
            cấp trên, và danh sách những điều cần xem xét vẫn còn tiếp tục.
          </p>
          <p
            className={`${sourceSans3.className} font-thin text-4xl uppercase mt-8`}
          >
            Từ trên xuống dưới - Chúng tôi sẵn sàng đáp ứng mọi nhu cầu của bạn.
          </p>
          <p className="mt-8">
            Làm sao có thể tạo ra một bộ vest mang tính cá nhân hóa, thể hiện sự
            độc đáo của bạn, nếu những yếu tố trên không được xem xét? Nói cách
            khác, đó sẽ chỉ là một bộ vest may đo thông thường.
          </p>
          <p className="mt-8">
            Một bộ vest bespoke là sự thể hiện cá tính và phong cách riêng biệt
            của bạn. Bạn đóng vai trò quan trọng trong việc tạo ra nó, và khi
            mặc lên người, nó truyền tải một thông điệp về niềm tự hào và sự
            tinh tế, một cách khéo léo mà người xung quanh đều nhận ra.
          </p>
          <p className="mt-8">
            Đó là lý do tại sao 38 cách chúng tôi đo cơ thể của bạn được kết hợp
            với một số lượng tương đương những cách chúng tôi hướng dẫn bạn để
            tạo ra một phong cách độc đáo, phù hợp với cá tính và lối sống của
            bạn.
          </p>
          <p className="mt-8">
            Chúng tôi là những chuyên gia trong lĩnh vực may đo trang phục, bao
            gồm cả trang phục trang trọng.
          </p>
        </div>
      </div>
    </div>
  );
}
