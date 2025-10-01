import React from "react";

const Message = () => {
  return (
    <section className="py-16 px-6 lg:px-20 max-w-8xl lg:mt-10 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* 🔹 Left Side: Principal Image */}
        <div className="flex justify-center">
          <img
            src="/images/rosewood-principal.png" // apni Principal ki image ka path dalna
            alt="Principal"
            className="rounded-lg shadow-lg w-full max-w-sm object-cover"
          />
        </div>

        {/* 🔹 Right Side: Message */}
        <div>
          <p className="text-orange-500 font-semibold uppercase mb-2">
            Principal’s Message
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A Word From Our <span className="text-orange-500">Principal</span>
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            As a school principal, I feel honoured and privileged to be a part
            of an educational institution where every stakeholder is a learner
            and every day is an opportunity to learn and discover. We look at
            ourselves as a community of learners where everyone learns including
            our faculty, parents and students.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
             Your child's learning revolves
            around and involves an effective partnership between home and
            school. We want the education by which character is formed, the
            strength of mind is increased, then intellect is expanded and by
            which one can stand on one own feet. We appreciate a child's
            individuality and try to nurture his/her strength. We at ROSEWOOD
            believe that learning is an ending process and I assure you that our
            students and staff will take a lifelong journey. I look forward to
            working with you as we help to create a school where parents are
            welcome at any time. 
          </p>

          {/* Signature Line */}
          <div className="mt-6">
            <p className="font-semibold text-gray-800">Mrs Sarita Pandey</p>
            <p className="text-gray-500 text-sm">Principal, Rosewood International School</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
