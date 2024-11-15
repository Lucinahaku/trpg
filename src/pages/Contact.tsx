import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRoute } from '../contexts/RouteContext';
import { Send, Twitter, Mail, AlertCircle, } from 'lucide-react';
import { FaDiscord} from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

const Contact: React.FC = () => {
  const { navigate } = useRoute();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここでフォームの送信処理を行います
    console.log('Form submitted:', { name, email, message });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">お問い合わせ</h1>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6"
                role="alert"
              >
                <p className="font-bold">送信完了</p>
                <p>お問い合わせありがとうございます。内容を確認次第、ご連絡いたします。</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    お名前
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    メッセージ
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    送信
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">その他の連絡方法</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Twitter className="w-6 h-6 text-blue-400 mr-4" />
                <a
                  href="https://twitter.com/@Sophia_Ciel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  @Sophia_Ciel
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-gray-600 mr-4" />
                <a href="mailto:lucinahaku0401@gmail.com" className="text-blue-600 hover:underline">
                lucinahaku0401@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <FaDiscord className="w-6 h-6 text-purple-600 mr-4" />
                <a href="discordapp.com/users/340139048922513413" className="text-blue-600 hover:underline">
                sophia_ciel
                </a>
              </div>
              <div className="flex items-center">
                <FaBluesky className="w-6 h-6 text-blue-500 mr-4" />
                <a href="https://bsky.app/profile/sofiachan.bsky.social" className="text-blue-600 hover:underline">
                  sofiachan.bsky.social
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertCircle className="w-6 h-6 mr-2 text-yellow-500" />
              注意事項
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>返信には数日かかる場合があります。</li>
              <li>緊急の用件はTwitterのDMをご利用ください。</li>
              <li>シナリオの譲渡などを行った場合、法的処理を用いる場合があります。</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <button
            onClick={() => navigate('/')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            ホームに戻る
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;