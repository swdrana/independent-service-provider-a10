import React from "react";
import "./FAQ.css";
const FAQ = () => {
  return (
    <div>
      <div className="faq">
        <h2>Authorization এবং Authentication এর মধ্যে পার্থক্য</h2>
        <p>
          Authorization ও Authentication শব্দ দুটি একই রকম মনে হলেও এর মধ্যে অনেক পার্থক্য রয়েছে। নিন্মে এ দুই টেকনোলজি নিয়ে আলোচনা করা হল। 
        </p>
        <p>
        Authorization দ্বারা বুঝায় অনুমোদন বা ক্ষমতাপ্রদান। একটি ওয়েব সাইট বা আপ্লিকেশনের অনেক ব্যবহার কারী থাকতে পারে কিন্তু সবার অবদান সমান নয়। কেউ হয়ত সাধারণ ব্যবহার কারী আবার কেউ হইত তার মালিক। যিনি মালিক তিনি সাইট টির বিভিন্ন কন্টেন্ট পরিবর্তন করতে পারেন কিন্তু সাধারণ ব্যবহার কারীরা কেবল সেটা পড়তে পারেন, এই ব্যাপারটিই মূলত Authorization. Authorization এর দ্বারা ঠিক করে দেওয়া হয় কোন User কোন কোন সুবিধা ভোগ করতে পারবে এবং কোন User পারবে না। 
        </p>
        <p>
        Authentication তথা প্রমাণীকরণ। এর দ্বারা কোন ওয়েব সাইটের Login / Signin কে বুঝায়। ওয়েব সাইটের কিছু কিছু অংশ সকল ব্যবহার কারীদের থেকে লুকিয়ে শুধুমাত্র যারা রেজিস্ট্রেশন আছে তাদের কে নিদিষ্ট কোন পেইজ এর অ্যাক্সেস দেওয়া হয় এ ক্ষেত্রে ব্যবহার করা হয় এ Authentication. কেননা, এর মাধ্যমে নির্ণয় করা হয় যে, User যে protected পেইজের অ্যাক্সেস করতে চাচ্ছে তার জন্য যে যোগ্য কি না, যদি তিনি রেজিস্ট্রেশন করে থাকেন তবে তিনি যোগ্য তথা উক্ত পেইজে প্রবেশ করতে পারবেন নতুবা পারবেন না। 
        </p>
      </div>
      <div className="faq">
        <h2>Firebase Authentication ছাড়া অন্য কি কি সেবা প্রদান করে?</h2>
        <p>
          নিন্মে কয়েকটি পয়েন্ট দিয়ে Firebase এর Authentication ছাড়া অনন্যা সার্ভিস গুলো উল্লেখ করা হলঃ
        </p>
        <ul>
          <li>Email & password, Google, Facebook, এবং Github এর মাধ্যমে authentication প্রদান। </li>
          <li>ডাটাবেস</li>
          <li>রিয়েল টাইম ডাটাবেস</li>
          <li>এর মাধ্যমে Ready-made api এর সুবিধা পাওয়া যাই।</li>
          <li>Data node level এ সিকিউরিটি প্রদান করে। </li>
          <li>ফাইল স্টোরেজ</li>
          <li>ক্লাউড স্টোরেজ</li>
          <li>স্ট্যাটিক ফাইল হোস্টিং</li>
        </ul>
      </div>
      {/* <div className="faq">
        <h2>Props ও State এর মধ্যে পার্থক্য কি?</h2>
        <p>
          Props ও State কে রিয়াক্ট এর খুবিই গুরুত্বপূর্ণ দুটি উপাদান বলা যাই।
          JSX এর মাধ্যমে তৈরিকৃত কম্পোনেন্টে ডাটা প্রেরণ করা ও User এর কাজের উপর
          নির্ভর করে Data পরিবর্তন করে দেখানো ক্ষেত্রে এ দুটির জুড়ি নাই! বিষয়
          দুটি আপাত দৃষ্টিতে দেখতে একই রকম দেখালেও এদের কাজের মধ্যে আছে অনেক
          তফাৎ। নিন্মে ছকের মাধ্যমে এ দুইয়ের পার্থক্য দেখানো হলঃ{" "}
        </p>
        <table>
          <thead>
            <tr>
              <th>Props</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Props হল read only অর্থাৎ ডাটা পেলে সেটিকে ব্যবহার করা যাবে
                কিন্তু পরিবর্তন করা যাবে না।{" "}
              </td>
              <td>State এর ডাটা পরিবর্তন যোগ্য।</td>
            </tr>
            <tr>
              <td>Props হয় immutable বা অপরিবর্তনীয়। </td>
              <td>State হল mutable বা পরিবর্তনযোগ্য। </td>
            </tr>
            <tr>
              <td>Props কে তার child component access করতে পারে।</td>
              <td>State কে তার child component access করতে পারে না। </td>
            </tr>
            <tr>
              <td>এটি components কে reusable (পুনারায় ব্যবহার) করতে পারে। </td>
              <td>
                এটি components কে reusable (পুনারায় ব্যবহার) করতে পারে না।
              </td>
            </tr>
            <tr>
              <td>Stateless component এ Props থাকতে পারে। </td>
              <td>Stateless component এ Props থাকতে পারে না। </td>
            </tr>
          </tbody>
        </table>
        <p>
          উপরিক্ত আলোচনার মাধ্যমে আমরা Props ও State সম্পর্কে সাধারণ কিছু তথ্য ও
          এদের মধ্যে পার্থক্য সম্পর্কে জানতে পারলাম, এগুলো নিয়ে কাজ করার সময়
          আমাদের উক্ত বিষয়গুলি খেয়াল রেখেই সঠিকভাবে ব্যবহার করতে হবে নতুবা,
          কাঙ্ক্ষিত ফলাফল না পাওয়া ছাড়াও বিভিন্ন সমস্যার সম্মুখীন হতে হবে।{" "}
        </p>
      </div> */}
    </div>
  );
};

export default FAQ;
