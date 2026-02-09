import { myFetch } from "@/utils/myFetch";
import Container from "../Container";
import dayjs from "dayjs";

const Impressum = async () => {
  const res = await myFetch("/disclaimers/impressum");

  return (
    <div className={`bg-[#2C3E50] py-16`}>
      {/* Header */}
      <Container>
        <div className="rounded-lg p-8 md:p-10 text-gray-200 space-y-8">
          <div
            className="text-white [&_*]:!text-white"
            dangerouslySetInnerHTML={{ __html: res?.data?.content }}
          />

          <p>
            Last Updated : {dayjs(res?.data?.updatedAt).format("DD-MM-YYYY")}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Impressum;
