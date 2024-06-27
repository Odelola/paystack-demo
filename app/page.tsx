"use client";
import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import Image from "next/image";

const App = () => {
  const publicKey = "pk_test_579b64f84c9afa70dce2fb638479077310a4d8cd";
  const amount = 1000000;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: (data: any) => {
      alert("Thanks for doing business with us! Come back soon!!"),
        console.log(data);
    },"use client";
import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import Image from "next/image";

const App = () => {
  const publicKey = "pk_test_579b64f84c9afa70dce2fb638479077310a4d8cd";
  const amount = 1000000;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: (data: any) => {
      alert("Thanks for doing business with us! Come back soon!!"),
        console.log(data);
    },

    onClose: (data: any) => {
      alert("Wait! Don't leave :(");
      console.log(data);
    },
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="">
        <div className="">
          <div className="">
            <h1 className="text-3xl">Spotflow Checkout Page</h1>
            <img
              src="https://moheim.com/asset/img/home/img_stories_010@1x.jpg"
              width={200}
              height={200}
              className="mx-auto"
            />
            <p>Your item is ₦{amount / 100}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <form className="flex flex-col gap-y-3">
            <div>
              <label
                htmlFor="name"
                className={`text-sm text-navy-700 dark:text-white`}
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none`}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className={`text-sm text-navy-700 dark:text-white`}
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Email Address"
                className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none`}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className={`text-sm text-navy-700 dark:text-white`}
              >
                Phone
              </label>
              <input
                type="text"
                id="email"
                placeholder="Phone"
                className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none`}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </form>
          <PaystackButton
            className="p-2  bg-blue-500 text-white"
            {...componentProps}
          />
        </div>
      </div>
    </div>
  );
};

export default App;


    onClose: (data: any) => {
      alert("Wait! Don't leave :(");
      console.log(data);
    },
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="">
        <div className="">
          <div className="">
            <p>Test</p>
            <p>{amount}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <form className="flex flex-col gap-y-3">
            <label>Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </form>
          <PaystackButton {...componentProps} />
        </div>
      </div>
    </div>
  );
};

export default App;
