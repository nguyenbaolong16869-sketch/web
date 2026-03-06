import React, { useState } from 'react';
import { 
  Search, 
  Heart, 
  User, 
  ShoppingCart, 
  ArrowRight, 
  Leaf, 
  ShieldCheck, 
  Truck, 
  Headphones, 
  CreditCard,
  Facebook,
  Instagram,
  Twitter,
  Menu,
  X,
  Armchair,
  Star,
  StarHalf,
  Minus,
  Plus,
  Maximize2,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Box,
  Trash2,
  ArrowLeft,
  Landmark,
  Banknote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CartItem {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  quantity: number;
  color?: string;
  size?: string;
}

const Header = ({ onNavigate, onNavigateToCategoryDetail, cartCount }: { onNavigate: (page: 'home' | 'category' | 'product-detail' | 'cart') => void, onNavigateToCategoryDetail: (category: string) => void, cartCount: number }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background-light/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <Armchair className="text-primary w-8 h-8" />
            <h1 className="text-xl font-bold tracking-tighter text-primary">LUXE FURNISH</h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className="text-sm font-bold flex items-center gap-1 hover:text-primary transition-colors cursor-pointer uppercase tracking-tight">
                Sản phẩm <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-primary/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all py-2 z-50">
                {['Sofa', 'Bàn ăn', 'Giường ngủ', 'Tủ kệ'].map(item => (
                  <button 
                    key={item} 
                    onClick={() => onNavigateToCategoryDetail(item)}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-primary/5 hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative group">
              <button className="text-sm font-bold flex items-center gap-1 text-amber-600 hover:text-amber-700 transition-colors cursor-pointer uppercase tracking-tight">
                Phòng <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-primary/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all py-2 z-50">
                {['Phòng khách', 'Phòng ngủ', 'Phòng ăn', 'Văn phòng'].map(item => (
                  <button 
                    key={item} 
                    onClick={() => onNavigateToCategoryDetail(item)}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-primary/5 hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <button className="text-sm font-semibold hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('category')}>Cửa hàng</button>
            <button className="text-sm font-semibold hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('category')}>Bộ sưu tập</button>
            <button className="text-sm font-semibold hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('category')}>Hàng mới về</button>
            <button className="text-sm font-semibold hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('home')}>Tạp chí</button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center bg-primary/5 rounded-full px-4 py-1.5 border border-primary/10">
              <Search className="text-primary w-4 h-4" />
              <input 
                className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm w-40 placeholder:text-primary/40 ml-2" 
                placeholder="Tìm kiếm nội thất..." 
                type="text"
              />
            </div>
            <button className="p-2 hover:bg-primary/10 rounded-full text-primary transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-primary/10 rounded-full text-primary transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button 
              onClick={() => onNavigate('cart')}
              className="p-2 hover:bg-primary/10 rounded-full text-primary transition-colors relative"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="md:hidden p-2 text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background-light border-b border-primary/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <details className="group">
                <summary className="flex items-center justify-between w-full text-sm font-bold uppercase tracking-tight list-none cursor-pointer">
                  Sản phẩm <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-4 mt-2 space-y-2 border-l border-primary/10">
                  {['Sofa', 'Bàn ăn', 'Giường ngủ', 'Tủ kệ'].map(item => (
                    <button 
                      key={item} 
                      onClick={() => { onNavigateToCategoryDetail(item); setIsMenuOpen(false); }}
                      className="block text-sm text-slate-500 hover:text-primary py-1 w-full text-left"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </details>
              <details className="group">
                <summary className="flex items-center justify-between w-full text-sm font-bold text-amber-600 uppercase tracking-tight list-none cursor-pointer">
                  Phòng <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-4 mt-2 space-y-2 border-l border-primary/10">
                  {['Phòng khách', 'Phòng ngủ', 'Phòng ăn', 'Văn phòng'].map(item => (
                    <button 
                      key={item} 
                      onClick={() => { onNavigateToCategoryDetail(item); setIsMenuOpen(false); }}
                      className="block text-sm text-slate-500 hover:text-primary py-1 w-full text-left"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </details>
              {['Cửa hàng', 'Bộ sưu tập', 'Hàng mới về', 'Tạp chí'].map((item) => (
                <button key={item} className="block text-sm font-semibold hover:text-primary w-full text-left" onClick={() => { onNavigate(item === 'Tạp chí' ? 'home' : 'category'); setIsMenuOpen(false); }}>
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = ({ onNavigate }: { onNavigate: () => void }) => (
  <section className="relative h-[85vh] w-full overflow-hidden">
    <div className="absolute inset-0">
      <img 
        className="w-full h-full object-cover" 
        alt="Modern minimalist living room" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuANPGNCi7A_ShJwI2x-X_URxWxUCB3_56qGbDGeEkfHqJsgMlvT2_3hNeQyjzKtg03zN1nQvymv-rKsFsmaU80YE6nH7CtkiHsF0B6DgX_EqmC27tDAb464cYUhnN2Cv3-FEFYYW3UV-8A2KZDBhCZRrhjv41EP97Ru87Q-V70QWtpGaqdMqIBhXfvD0Wpwy4Wn16wnqGQvSMXd5hjxWQ5gtz3E5xq5FAelmOBZhcsO1B3MplQP-q2CB597JS0Gk0H7gzukFROYtrc"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
    </div>
    <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-start">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-primary bg-background-light/90 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
      >
        Sống Xanh Hiện Đại
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight max-w-2xl"
      >
        Nâng Tầm <br/><span className="text-primary italic font-light">Không Gian Sống</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-lg text-slate-200 mb-8 max-w-lg leading-relaxed"
      >
        Khám phá bộ sưu tập nội thất tối giản, cao cấp được thiết kế cho ngôi nhà hiện đại và tinh tế.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap gap-4"
      >
        <button 
          onClick={onNavigate}
          className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-all flex items-center gap-2 group"
        >
          Mua Ngay <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all">
          Khám phá Lookbook
        </button>
      </motion.div>
    </div>
  </section>
);

const CategoryCard = ({ title, image, onClick }: { title: string, image: string, onClick?: () => void }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="group cursor-pointer"
    onClick={onClick}
  >
    <div className="aspect-square rounded-xl overflow-hidden bg-primary/5 mb-4 relative">
      <img 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        alt={title} 
        src={image}
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
    </div>
    <h3 className="font-bold text-lg text-center">{title}</h3>
  </motion.div>
);

const Categories = ({ onNavigate }: { onNavigate: () => void }) => (
  <section className="max-w-7xl mx-auto px-4 py-20">
    <div className="flex justify-between items-end mb-10">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Mua sắm theo Danh mục</h2>
        <p className="text-slate-500">Khám phá các thiết kế theo từng phòng</p>
      </div>
      <button 
        className="text-primary font-bold border-b-2 border-primary/20 hover:border-primary transition-all pb-1 hidden sm:block" 
        onClick={onNavigate}
      >
        Xem tất cả Danh mục
      </button>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <CategoryCard onClick={onNavigate} title="Phòng khách" image="https://lh3.googleusercontent.com/aida-public/AB6AXuAlYESKjnNllBYfXiqNRjcijnmCPAJYzNWfrpB99Kmz4Trv_8wss4tKMXjyCp7RBDhoGu6tIcZQVOvQIVxEzlOv1tHs5wN20j32T2Q6pCCFnTkNEIgLNjwwtAPkpAhBmFEQNUV5reEAT2_8TKSgD6YWrjadciXV0GBzGwST0zm7DJnjJuZ8bwj67saqPMX0zH0AnoJXRcssIgtTmAOPmSG2xM-y77jEgaQAuaMWYBeV8fnukNQ8_8QjZRmyuEbcwwsz4aMIyUtpLow" />
      <CategoryCard onClick={onNavigate} title="Phòng ngủ" image="https://lh3.googleusercontent.com/aida-public/AB6AXuBh9vRA6HT74wTeFMo-pm6g1JCx_lz-Byv-k2rx-DYlhfAiuOTroXw1baPXry3evoS-NiXTnv2sTqg4RE_J73lVy5V_JgG5z465FWiCFnuauFy53BhWfi7qycajzfElZn9lZwIp9UwS-PEhQ1PBmTrHR1gHsxQfcO0-NeDQIa_AFz5B8T_GNI3pm3SwZWZLT8KrU8lfm5toEFLDZZBETMloaYs7bV4rw8N4zxzixRg6FUd-e-zhRmapj1nx32QHB3YQuJ9qqx9JcJI" />
      <CategoryCard onClick={onNavigate} title="Phòng ăn" image="https://lh3.googleusercontent.com/aida-public/AB6AXuBpb0x7bq-Lx3Bm1VmqSYNT5tFOG5gjxDWNhxGsCuSNJhAb85gEnXJDJdv8x1t0Ou7wVQrGYPhkRY0PAcEopQEsHY45ItUJitGvFRO3QRqK4jIcqWV4h6mUIpLFdLxYnkjetQSKR63nCa8TvvSWYlECyZMrLUTqyIX3DpTe2AwrgBUyEoEx0nVYePYDtlAtzTvFRBJGQLMNg99wtGq67o0Z4ecayhOsEmxUEiTZLHGsxk7ZOLdacVAaz1nwOmfHiQmhk60VsNWXg1U" />
      <CategoryCard onClick={onNavigate} title="Văn phòng" image="https://lh3.googleusercontent.com/aida-public/AB6AXuANHRqQSJDZAohkWYgFkmVYqrQaUl93xmdbYpIXpNrBPlCWtN5DrkJv9xyHALjNJJCe_r4-elj1JLPg3AoJIsCbSJhGKnGgRLrLnybgVvuEGhkOJ7xCv-aYiDZSQB1n79kVj9A21Mk_vE0P0g-sn2m7d_Vk8MD1BASQJCFYQuKUtgsNdKIPVAR_Kh_MNCIDfI9UuSvfSZFbLjYc7xWcPdAsb9bKZiR5687BDZn_vtlD44ktmR0uADQ9nEkHQGE9_uPXrPPrItfsPf8" />
    </div>
  </section>
);

const ProductCard = ({ title, category, price, image, colors, onClick }: { title: string, category: string, price: string, image: string, colors: string[], onClick?: () => void }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer"
    onClick={onClick}
  >
    <div className="relative aspect-[4/5] overflow-hidden">
      <img 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
        alt={title} 
        src={image}
        referrerPolicy="no-referrer"
      />
      <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
        <Heart className="w-4 h-4" />
      </button>
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <button className="w-full bg-primary text-white py-3 rounded-lg font-bold shadow-lg">Thêm vào giỏ</button>
      </div>
    </div>
    <div className="p-6">
      <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1">{category}</p>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold">{price}</span>
        <div className="flex gap-1">
          {colors.map((color, i) => (
            <span key={i} className="w-3 h-3 rounded-full border border-black/5" style={{ backgroundColor: color }}></span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const NewArrivals = ({ onNavigate }: { onNavigate: (page: 'home' | 'category' | 'product-detail' | 'cart') => void }) => (
  <section className="bg-primary/5 py-20">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Hàng mới về</h2>
        <p className="text-slate-500 max-w-xl mx-auto italic">
          "Sự đơn giản là đỉnh cao của sự tinh tế." — Những sản phẩm mới nhất vừa được thêm vào bộ sưu tập.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard 
          onClick={() => onNavigate('product-detail')}
          title="Ghế bành nhung Bắc Âu" 
          category="Ghế ngồi" 
          price="$899.00" 
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuBkaZLYX4cfcXoMnsTaZ4Kihos_nd5h70_YXatvnGlchly6VT7T5nLIj-2H30F0TieZfFGstI2Lha2fkF7G-JKbyb9crUmDF_XR2o-3YfZ5vcWIAdfw1aJPXANC5UVCN9sGVX_o_bRz-XMARgCjOVnomPIruI0PWHO_x2Xj_e8E641CuJ2ijJuFzZG9UUAqab08Syc9aeZ20y4f_CaL7xEFdpHvoDwtNdbmJaYHYaJ-OSC7Bg6TJwLwCjt8RIxBpNovPma9M4dD1TI"
          colors={['#305050', '#8b7d6b', '#1e293b']}
        />
        <ProductCard 
          onClick={() => onNavigate('product-detail')}
          title="Bàn cà phê Onyx" 
          category="Phòng khách" 
          price="$1,250.00" 
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuDqiYX12ewXpfKYWToOVorNeMSXnkq8lcsTY-P76amJBSSo6IL2ate0mGgl744JfkwO3dHB-zEHzbZYKOyrMZrd6vWb_wniCJ2Hpw1iHvgCOvkQSROQXTrKF3MwG6UthW9zIN0nmF5jwPzIIdAWkMIpfH33rJdr_tNDukPS5F_6NBeFzegUXV_bfuVcd9MCkUt7AU-_ORyCpJwhsXjyXhjcfEB3o3sqvTRmGG3T_Eah_vhGJSktbUeSe03S99Hhm1v3F1gPjBFJfpg"
          colors={['#161c1c', '#cbd5e1']}
        />
        <ProductCard 
          onClick={() => onNavigate('product-detail')}
          title="Đèn thả trần Eclipse" 
          category="Trang trí" 
          price="$445.00" 
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuAQtM7q9aqbO-kHkAgR67KJ_PQDnN2Xx_s14PoZaeCXK436Hpcc-YPSqCYpGLOA9gBqaEAMjrF81k8efDRjulu4zdgDSoOpWsrYDgio7EAb4_i6ZZbdrd57cwFse3QylJPcTAFFDf22sR3FFFQdDagk9EnLy5uaQTcLFzb0ciNMQWsyUa7fZKA1F-TZdOC10SmASR8uOFy_bLNfDTvLs56UMr8F2TwGpeOJM7e7KbjzHGj13MYJVgplwuGBDkAIY9qvZgfon0vZ3GI"
          colors={['#f59e0b', '#f1f5f9']}
        />
      </div>
    </div>
  </section>
);

const FeaturedCollection = () => (
  <section className="max-w-7xl mx-auto px-4 py-24">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden h-[600px]"
      >
        <img 
          className="w-full h-full object-cover" 
          alt="Heritage collection" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYwDhL-__cS-bbHqY8eRRF6R-TuOLUwhBFYjEPJwB27bI-Go1To057p_I4EaRPjPb1LLjsduqncHyWMpzdl5njwRay9JUgNHYOOLf9YjNlrXj9bXgUJFFjkfQ-YSYeOskEi0tO7N8q0eozyT3zzNPM_d7WnK3SstIgHqF0hL5DVo3oaWWJ8ttXnyihXzhMynhvq7DglmiGoPG9iTE4MudtXWJLS7voAa3rejNhMuq1kQGlMPRuQ6Qy4-iGj927M08RuXZkjyWXwAc"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/10"></div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-8 lg:pl-12"
      >
        <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Bộ sưu tập Tuyển chọn</span>
        <h2 className="text-5xl font-extrabold leading-tight">Dòng sản phẩm Heritage</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Sự kết hợp hoàn hảo giữa tay nghề thủ công truyền thống và thiết kế tiên phong. Mỗi món đồ đều được làm thủ công từ gỗ óc chó tái chế và hoàn thiện bằng dầu tự nhiên.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center gap-3 font-medium"><Leaf className="text-primary w-5 h-5" /> Gỗ óc chó nguyên khối bền vững</li>
          <li className="flex items-center gap-3 font-medium"><ShieldCheck className="text-primary w-5 h-5" /> Bảo hành cấu trúc trọn đời</li>
          <li className="flex items-center gap-3 font-medium"><Truck className="text-primary w-5 h-5" /> Bao gồm dịch vụ giao hàng cao cấp</li>
        </ul>
        <button className="bg-primary text-white px-10 py-5 rounded-lg font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
          Khám phá Bộ sưu tập
        </button>
      </motion.div>
    </div>
  </section>
);

const FeaturesBar = () => (
  <section className="border-y border-primary/10 py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { icon: Truck, title: 'Giao hàng Toàn cầu', desc: 'Có mặt tại hơn 60 quốc gia' },
        { icon: ShieldCheck, title: 'Bảo hành 2 năm', desc: 'Cho tất cả các mặt hàng' },
        { icon: CreditCard, title: 'Thanh toán An toàn', desc: 'Quy trình được mã hóa' },
        { icon: Headphones, title: 'Hỗ trợ 24/7', desc: 'Chuyên gia tư vấn thiết kế' }
      ].map((feature, i) => (
        <div key={i} className="flex flex-col items-center text-center gap-2">
          <feature.icon className="text-primary w-10 h-10" />
          <h4 className="font-bold">{feature.title}</h4>
          <p className="text-xs text-slate-500">{feature.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white pt-20 pb-10 border-t border-primary/10">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-2">
            <Armchair className="text-primary w-8 h-8" />
            <h2 className="text-xl font-bold tracking-tighter text-primary uppercase">Luxe Furnish</h2>
          </div>
          <p className="text-slate-500 max-w-sm">
            Chế tác nội thất tối giản, chất lượng cao cho ngôi nhà hiện đại. Các thiết kế của chúng tôi ưu tiên sự thoải mái, thẩm mỹ và tính bền vững.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/5 hover:bg-primary/20 transition-colors" href="#">
                <Icon className="w-5 h-5 text-primary/60" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6">Bộ sưu tập</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            {['Dòng sản phẩm Heritage', 'Căn hộ Tối giản', 'Nội thất Văn phòng', 'Không gian Ngoài trời'].map(link => (
              <li key={link}><a className="hover:text-primary transition-colors" href="#">{link}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Về chúng tôi</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            {['Câu chuyện thương hiệu', 'Phát triển bền vững', 'Báo chí & Truyền thông', 'Liên hệ'].map(link => (
              <li key={link}><a className="hover:text-primary transition-colors" href="#">{link}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Hỗ trợ</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            {['Giao hàng & Trả hàng', 'Bảo quản Sản phẩm', 'Câu hỏi thường gặp', 'Theo dõi đơn hàng'].map(link => (
              <li key={link}><a className="hover:text-primary transition-colors" href="#">{link}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xs text-slate-400">© 2024 Luxe Furnish. Bảo lưu mọi quyền. Thiết kế cho cuộc sống hiện đại.</div>
        <div className="flex gap-4">
          <select className="bg-primary/5 border-none rounded-lg text-xs font-semibold focus:ring-1 focus:ring-primary/20 py-1.5 pl-3 pr-8 appearance-none">
            <option>Tiếng Việt</option>
            <option>English</option>
          </select>
          <select className="bg-primary/5 border-none rounded-lg text-xs font-semibold focus:ring-1 focus:ring-primary/20 py-1.5 pl-3 pr-8 appearance-none">
            <option>USD ($)</option>
            <option>EUR (€)</option>
          </select>
        </div>
      </div>
    </div>
  </footer>
);

const CategoryPage = ({ onProductClick }: { onProductClick: () => void }) => {
  const products = [
    {
      id: 1,
      title: "Sofa Nhung Bắc Âu",
      category: "Sofa & Ghế bành",
      price: "$1,299",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSI-f6IoU-htnPq6U2jE9o_u6w9coNGRhfiTmIkh5qUXLj0ZlQ8zTfAraAjnzYEvCZb8qcvwUBWzvb4u4j7yfkSjd5mDa6tlxRyf2bsLAli8Te2vQgMEtdRoxlj-cBRZ8nTaWGxDglCEyOtpxjj9diuYuoKYEg1LXVcDakvgChkVQX0RDEmYp0Lt1Ao696gw3KzXdFdtkeysXgjak6p9kJg-E2wR_Z-j6KHtixdPsmFuq95Svj2cptWRAFwd5wDspL7cvSTDEwKkU",
      tag: "Mới về",
      colors: ['#065f46', '#0f172a', '#78350f']
    },
    {
      id: 2,
      title: "Ghế Gỗ Sồi Uốn Cong",
      category: "Sofa & Ghế bành",
      price: "$349",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAV_DD8bT3lM_nswbwJRHaGTnCUY-2tu8DPhr9PY7To-oktdU9vW8wG93ZvHsrn1jEGxmdRuxllNqorl2PB3OB6jU74ztKnleV4DMwjcGyAO5CqH-VjXyyUNYjUUKILzUTgkqClAtqBUS4WWcVd2LX3SXVXU7n9ICHisyeHXyqe5LGPsFyiL03JU2XQYAHxTgROZt_nFZANWyJNjdNq-39GKpCoiFBZ2he3MUmXorbMx8xq524Wlu5ALD0jSTvLlxoZhiwO6U6IiI8",
      colors: ['#fed7aa', '#92400e']
    },
    {
      id: 3,
      title: "Bàn Phụ Mặt Đá Cẩm Thạch",
      category: "Bàn & Bàn làm việc",
      price: "$210",
      oldPrice: "$265",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKwq4Op5yncPFwIuZ_Tq2hOvNj0SLDhbu1BouauxSOCN1lx9-7BA6ayQu00n_57guAodTzWQ8uPXibNjYAmIx1AxvQM_RIE11xbeHQMaNcpv20buJpc8qyWFfvlOBOPdylVR2jwjUHW2Z9aeLhuX1fEeCozbMXr1IJrslczGupq76633VVzgPJqYtpbH5T8tOTc3Hu-_tXLdk5Yd8lF-WA5OovnK_XKSzuLhUakRi28MNdbhaSgHItbJ9e8rFU5qYOPq5-o50iE98",
      tag: "Giảm giá -20%",
      colors: ['#ffffff', '#94a3b8']
    },
    {
      id: 4,
      title: "Ghế Thư Giãn Cloud",
      category: "Sofa & Ghế bành",
      price: "$580",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAl_CrcmNbHQeF7E7EAaqPOyvIsmQSWpN_9JxKJ8UybAZQgoRUrYXlrYwGJTkYO0N9PfxACWaoYDs7ZIF-qL0HbTgnSHgme7Y9-MVYo_CyiZDRjnq6W3VB2S1fg-GLlqFJg_tIJ71Jug1EWzBOQYdkkWpoTbyjjy9cCgfUHSq47mzQa5Pl138M3-oXORpjkSQFQgnE3OhAplLAjiNMd6PzVv1aaa3-fcQ43GaEgJLsP1s0rtTUitemvquDYaS6RGtPlLFL1nsaT27U",
      colors: ['#cbd5e1', '#475569']
    },
    {
      id: 5,
      title: "Bàn Làm Việc Gỗ Óc Chó",
      category: "Bàn & Bàn làm việc",
      price: "$2,450",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJloC32grSr_rLTcXFt6Cytf3Uwzlf6ds2KbAaR1q5DsthE9qWdvrxpHo-N2Pr7Nc0jBHTi1InlEsShg7u7XRhCm9MlbBKbnUUhoez8VCiwG0xtvOGH81h2NtBCUvvD2pdND8tZx0xFFj1oV3S3TC8T6fzcwMinicBS8qq8inH1iYDBA7NsQxDuw44zrLOIzRHUsTrl1lZI2B2KFAt_FQumITC5VMC51WapNY0iNRI3nZSKJw7k3urv7caXxRBIpWHZsQ09YabSzA",
      colors: ['#422006']
    },
    {
      id: 6,
      title: "Khung Giường Serenity",
      category: "Phòng ngủ",
      price: "$1,899",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIGjKxnKZwIFaQmnLA8ntGnyp3vPPKoH5DTrVUm8RfuFCXUygiap4FlORLlTkZjE124j7Ms_ibc7KIvrjnd01BAfxt_36sAGD2yW4vuq15RImM4uvm3h2i8_nSewY4i2BzGRXxI5KCiQUvPIjguffmtOFcku5D-8ItV8lWwklphihYz86L-VMZjULVfNkuaXfMz9YG9BkaVTXiBkzYcoObBZr8lKNmDTrTR_vl5ezbRWx07Z3DUYVmjUaGENUgQtIDCuE9fO_cLDU",
      colors: ['#a8a29e', '#1e3a8a']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      {/* Sidebar Filters */}
      <aside className="w-full lg:w-72 flex-shrink-0">
        <div className="sticky top-24 space-y-8 bg-white p-6 rounded-xl border border-primary/10 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Bộ lọc nâng cao</h3>
            <button className="text-xs text-primary hover:underline font-semibold">Xóa tất cả</button>
          </div>

          <div className="space-y-6">
            {/* Category Filter */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold flex items-center gap-2">
                <Armchair className="w-4 h-4 text-primary" /> Danh mục
              </h4>
              <div className="space-y-2">
                {['Tất cả nội thất', 'Sofa & Ghế bành', 'Bàn & Bàn làm việc', 'Hệ thống lưu trữ'].map((cat, i) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" defaultChecked={i === 0} className="rounded text-primary focus:ring-primary/20 border-primary/20" />
                    <span className="text-sm group-hover:text-primary transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="pt-4 border-t border-primary/5 space-y-3">
              <h4 className="text-sm font-bold flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-primary" /> Khoảng giá
              </h4>
              <div className="px-2">
                <input type="range" className="w-full h-1 bg-primary/10 rounded-lg appearance-none cursor-pointer accent-primary" />
                <div className="flex justify-between mt-2 text-xs font-medium opacity-60">
                  <span>$100</span>
                  <span>$5,000+</span>
                </div>
              </div>
            </div>

            {/* Material Filter */}
            <div className="pt-4 border-t border-primary/5 space-y-3">
              <h4 className="text-sm font-bold flex items-center gap-2">
                <Leaf className="w-4 h-4 text-primary" /> Chất liệu
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Gỗ sồi', 'Nhung', 'Thép', 'Da'].map((mat, i) => (
                  <button key={mat} className={`px-3 py-1 text-xs rounded-full border transition-colors ${i === 1 ? 'bg-primary text-white border-primary' : 'border-primary/20 hover:bg-primary hover:text-white'}`}>
                    {mat}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div className="pt-4 border-t border-primary/5 space-y-3">
              <h4 className="text-sm font-bold flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-red-500 via-green-500 to-blue-500"></div> Màu sắc
              </h4>
              <div className="flex gap-2">
                {['#065f46', '#0f172a', '#78350f', '#cbd5e1', '#305050'].map((color, i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform" style={{ backgroundColor: color }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Product Content */}
      <section className="flex-1 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <button className="hover:text-primary">Trang chủ</button>
            <ArrowRight className="w-3 h-3" />
            <button className="hover:text-primary">Nội thất</button>
            <ArrowRight className="w-3 h-3" />
            <span className="text-slate-900">Phòng khách</span>
          </nav>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium opacity-60">Sắp xếp theo:</span>
            <div className="flex bg-primary/5 p-1 rounded-lg">
              <button className="px-4 py-1.5 text-xs font-bold rounded-md bg-white shadow-sm text-primary">Phổ biến</button>
              <button className="px-4 py-1.5 text-xs font-bold rounded-md hover:text-primary transition-colors">Mới nhất</button>
              <button className="px-4 py-1.5 text-xs font-bold rounded-md hover:text-primary transition-colors">Giá</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={onProductClick}
              className="group relative bg-white rounded-xl overflow-hidden border border-primary/5 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden bg-background-light">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt={product.title} 
                  src={product.image}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span className="bg-white text-primary px-6 py-2.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 hover:bg-primary hover:text-white transition-all">
                    Xem nhanh
                  </span>
                </div>
                {product.tag && (
                  <span className={`absolute top-4 left-4 text-white text-[10px] font-black uppercase px-2 py-1 rounded ${product.tag.includes('Giảm giá') ? 'bg-red-600' : 'bg-primary'}`}>
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="p-5 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{product.title}</h3>
                    <p className="text-xs text-slate-500">{product.category}</p>
                  </div>
                  <div className="text-right">
                    <span className="block font-black text-primary">{product.price}</span>
                    {product.oldPrice && <span className="text-[10px] line-through opacity-40">{product.oldPrice}</span>}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {product.colors.map((color, i) => (
                      <div key={i} className="w-4 h-4 rounded-full border border-slate-200" style={{ backgroundColor: color }}></div>
                    ))}
                  </div>
                  <button className="text-primary hover:scale-110 transition-transform" onClick={(e) => e.stopPropagation()}>
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="py-12 flex flex-col items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full border-4 border-primary/10 border-t-primary animate-spin"></div>
          <p className="text-sm font-medium opacity-60">Đang tải thêm sản phẩm cao cấp...</p>
        </div>
      </section>
    </div>
  );
};

const ProductDetailPage = ({ onBack, onNavigateToCategory, onAddToCart }: { onBack: () => void, onNavigateToCategory: () => void, onAddToCart: (quantity: number) => void }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [mainImage, setMainImage] = useState(0);

  const product = {
    title: "Ghế Sofa Nhung Bắc Âu",
    price: "$1,299.00",
    rating: 4.5,
    reviews: 48,
    description: "Nâng tầm không gian sống của bạn với chiếc Ghế Sofa Bắc Âu được chế tác thủ công. Được bọc bằng nhung Ý cao cấp, sản phẩm có khung gỗ sồi chắc chắn và đệm mút có độ đàn hồi cao mang lại sự thoải mái vô song và phong cách bền bỉ.",
    colors: ['#305050', '#1e2a44', '#333333'],
    sizes: ['3 chỗ ngồi', '4 chỗ ngồi'],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBSFWdajHUpuqSDNVY73G267T4a8ZukuLG3v7YpKDHeyn1hAAdzmfdAAQPU6YzebUU0ky3qq0gvZ9t3ZNQ3SDuBmZyCMNEEjWS5adkx4SH3I1oIIbkNI4r73URwRglwyXvGa8-afztOWbCewb98kvUWDAef5WuKY2vtwpF6NNUEhv0mNeijNUtYFl5xgn2mmgmWQetl47oWHdzDo2WOLLampqavsdp5V0gOgWTMFX1UF7Oj61kdugjAYnVFIiinnvfA7OFVr2dzlUM",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBN6j7jQuFmZJysxFDd_DR5qA4J49qh9zCkVHAvPi4w0oWlSTKUr_lcq1K6jYK9iOWVcS4yy-TaTKWL8nP7XCfg2VeuKaN-X-pggiF8p05uPOkCA0YGR9iGOFim6nVubZFiKWhe53xBEVlms7IXDPGtC9KNcLO54Jxg-4yP91aUGDd19TU_z5F3IfsswLa9SYnxyNV8lti9sequ7lsED8gxTBNaLwwX59uoIkcGb6aLn01CSaMGZaesgwidvZOmBg_LW7GlAq-c0fA",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBHrt4etjKN-BZKvPXtX9nQdBm2Ap11-SKjJoEssZg0ULWe1dHu5mWwU779QSdpjou4Xo5N06-xe-6C6GMVW1FMExgX0GX_Qg3cSqmvl3sHBdJuWEjNXgmXhwfb5k0N-GmL5dKMtIRiSkgOeKqerbn31SOxxrN9RA0DA2ILj1OdwFZcWF2-8WX9_nG9THeCRUj6pRBlDa5oj77KN3kfFxRi1DcBUuYLKWKjRoAyoVhXIvTm_X4US_WeI67oqGo2MISaC9EEEX1gy1Y",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAXx8gpOK7oCYv3saFcfHjpJ35rLbecVHZVHJCCw4iKlRnx_WgUEl-lKwsWF4gLc1ehOfeM-FHAbZVBaNXBeiVs27FpBDGS-4wiNYJ82YvpEKe5I7xH0C_cNjSqmAmsMg2OsQW0lvmOgbzplzq70geiKnmUGLg1DrAxoRQgba9v5FUXzwcagpmt-v1cWWUTXB2QP9jC3F7it3G8Vi3vjK_g4_NUfIdVuKzgwABHI7Thtx6NlpGLcHnj1tS7ClLZc4bQf8SLM9JuFtc"
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
        <button onClick={onBack} className="hover:text-primary transition-colors">Trang chủ</button>
        <ChevronRight className="w-3 h-3" />
        <button onClick={onNavigateToCategory} className="hover:text-primary transition-colors">Phòng khách</button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-primary font-semibold">Ghế Sofa</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Gallery */}
        <div className="lg:col-span-7 space-y-4">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-primary/5 group relative">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              alt={product.title} 
              src={product.images[mainImage]}
              referrerPolicy="no-referrer"
            />
            <button className="absolute top-4 right-4 p-3 bg-white/80 backdrop-blur rounded-full text-primary hover:bg-white transition-all shadow-sm">
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, i) => (
              <div 
                key={i} 
                onClick={() => setMainImage(i)}
                className={`aspect-square rounded-xl overflow-hidden border-2 cursor-pointer transition-all ${mainImage === i ? 'border-primary' : 'border-transparent hover:border-primary/30'}`}
              >
                <img className="w-full h-full object-cover" alt={`Thumbnail ${i}`} src={img} referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] uppercase font-black tracking-widest rounded-full">Hàng mới về</span>
              <div className="flex items-center text-amber-500">
                {[...Array(4)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                <StarHalf className="w-4 h-4 fill-current" />
                <span className="text-xs text-slate-500 ml-2 font-medium">({product.reviews} Đánh giá)</span>
              </div>
            </div>
            <h1 className="text-4xl font-black text-slate-900 leading-tight">{product.title}</h1>
            <p className="text-3xl font-light text-primary">{product.price}</p>
            <p className="text-slate-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Variants */}
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Màu sắc: <span className="text-primary">Xanh Rừng Sâu</span></span>
              <div className="flex gap-3">
                {product.colors.map((color, i) => (
                  <button 
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${selectedColor === i ? 'border-primary ring-2 ring-primary/20 ring-offset-2' : 'border-transparent hover:border-primary/30'}`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Kích thước</span>
              <div className="flex gap-3">
                {product.sizes.map((size, i) => (
                  <button 
                    key={i}
                    onClick={() => setSelectedSize(i)}
                    className={`px-6 py-2.5 border-2 rounded-xl text-sm font-bold transition-all ${selectedSize === i ? 'border-primary bg-primary text-white shadow-lg shadow-primary/20' : 'border-primary/10 text-primary hover:border-primary/30'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <div className="flex items-center border-2 border-primary/10 rounded-xl bg-white overflow-hidden">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-3 hover:bg-primary/5 text-primary transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-6 font-bold text-primary min-w-[3rem] text-center">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-3 hover:bg-primary/5 text-primary transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button 
              onClick={() => onAddToCart(quantity)}
              className="flex-1 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20 group"
            >
              <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" /> 
              THÊM VÀO GIỎ HÀNG
            </button>
            <button className="p-4 border-2 border-primary/10 rounded-xl hover:bg-primary/5 text-primary transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-y border-primary/10">
            <div className="flex items-center gap-3">
              <Box className="text-primary w-6 h-6" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Trạng thái</span>
                <span className="text-xs font-bold text-emerald-600">Còn hàng</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="text-primary w-6 h-6" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Giao hàng</span>
                <span className="text-xs font-bold">Miễn phí cao cấp</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-primary w-6 h-6" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Bảo hành</span>
                <span className="text-xs font-bold">2 năm chính hãng</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <section className="mt-20 max-w-4xl">
        <h3 className="text-2xl font-bold mb-8">Thông số kỹ thuật</h3>
        <div className="space-y-4">
          {[
            { title: "Kích thước & Trọng lượng", content: <div className="grid grid-cols-2 gap-6"><p><span className="font-bold block text-slate-900">Chiều rộng:</span> 220cm</p><p><span className="font-bold block text-slate-900">Chiều sâu:</span> 95cm</p><p><span className="font-bold block text-slate-900">Chiều cao:</span> 45cm</p><p><span className="font-bold block text-slate-900">Trọng lượng:</span> 58kg</p></div> },
            { title: "Vật liệu & Kết cấu", content: <div className="space-y-3"><p>Khung: Gỗ sồi đặc đã sấy khô và gỗ kỹ thuật. Các mối nối được gia cố chắc chắn.</p><p>Vải: 100% Nhung Cotton (Chỉ số mài mòn: 50.000 lượt).</p><p>Đệm: Mút polyurethane độ đàn hồi cao được phủ lớp sợi thay thế lông vũ.</p></div> },
            { title: "Hướng dẫn chăm sóc", content: <p>Khuyến nghị vệ sinh bọc nệm chuyên nghiệp. Đối với các vết đổ, hãy thấm ngay lập tức bằng vải khô sạch. Tránh tiếp xúc trực tiếp với ánh nắng mặt trời để ngăn vải nhung bị phai màu.</p> }
          ].map((spec, i) => (
            <details key={i} className="group border-b border-primary/10 pb-4" open={i === 0}>
              <summary className="flex justify-between items-center cursor-pointer list-none py-2">
                <span className="font-bold text-primary group-hover:translate-x-1 transition-transform">{spec.title}</span>
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="pt-4 text-sm text-slate-600 leading-relaxed">
                {spec.content}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Related Products */}
      <section className="mt-24">
        <h3 className="text-2xl font-bold mb-10 text-center">Hoàn thiện phong cách</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: "Đôn Gác Chân Nhung", price: "$349", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtPvJgyA0FvnT0NkriNoodI2adx1Ks0nyPIzyvMD0pF45e7lVMQS3dZg_GTyWpyumjkIGE8HF1srwpuXxB6axHIK_z7nlA32Qrq7S8FuBqf7SN72Fwd-WyrHz4PebmUnpSnUxPsrstQR5onwWsDsTxbyQThPP5OIt2m1BPjxh0tplKy8joPyhc_X-lpp5oZ1p9Bfuv56GDQdozU43D7T8I_z3fIdU76aFLIl1xtATM9GyBk5d79kVtVyHUgFw0Rw-129ZphBBAD4o" },
            { title: "Đèn Sàn Aura", price: "$219", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuuBjXJ5gw8zLzFPyCealjaKGt2P7mr95VPHDpqzHomKZZC5tfWQeGVj6M-IiGT-Tw49naGmSGU5C5_R2FNhSBk1OVQtD-cGO1t1ahb-O_aXDYpwNCY-LST7ws1XQVmFHlbP_1Z5Ligc3qlZsOjvh3HJIJ5j597X8bk3aslqvsxdu33Twxo9stlGuzkT1DV3jGQ0Uotod3NYxweZeEoPm4g4lRpns2NqpDXYA5KIU-c4HBx3Xo1jOKeeMrRkqoGYBbXsvRy1n8HkA" },
            { title: "Bàn Trà Helios", price: "$899", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNnwqHFX3i302HK0O15HM27ojjDol_VflrYkjP3vW32Ho8fu9hHGSgYWBN-qMqk8ELWfLXAVW0an0i2q2VWq0tVSn9BfFpNfMteDYN6gTdkx5AxiqD52BBq4TedfNAZiAF3kOc2FcrV7QcU3ZnRL95uxPFlaEIFv4vN7zUr0nhtAkWwoIVHDhOfXuCyINqkLHQrBsaPP24BMVwYKS4VsRft0YAsLbKP5SnTpizcyB0Xy1VrJ17HMdCgrEgZrSEcd4KAxj1axYbM0E" },
            { title: "Thảm Len Summit", price: "$549", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGomzEuvDl49Lrfa5rLqGqDRm7-G5ON6LKpO_QB8I-z0wYkHfcyfX1r5dgpsxWTEm9PmIUCKzOu7_q5oJtaTRN_j7xaGHzBAhQsHvnINqD_aCYWmGnSNlq3sPApH-91FhHmgZq9vM0sniq0iv9nBqwO1ArBVraSrvrZ3KYTUtrOZ1FUYnMoK21TVLjX2y2OrwNro1sEUeg09O6QZTfx3v3XwgTJUtHEST2H9DQBlAzYxuujkKCz-F1iWheCa_Rn2kes-w-AQr8KFI" }
          ].map((item, i) => (
            <div key={i} className="group cursor-pointer space-y-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-primary/5 relative">
                <img className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" alt={item.title} src={item.image} referrerPolicy="no-referrer" />
                <button className="absolute bottom-4 right-4 p-3 bg-white rounded-full text-primary opacity-0 group-hover:opacity-100 transition-all shadow-lg hover:bg-primary hover:text-white">
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-sm text-primary font-medium">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="mt-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h3 className="text-3xl font-black text-slate-900 mb-2">Trải nghiệm từ khách hàng</h3>
            <p className="text-slate-500">Dựa trên 48 đánh giá đã được xác thực</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-4xl font-black text-primary">4.5</p>
              <div className="flex items-center text-amber-500">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <StarHalf className="w-5 h-5 fill-current" />
              </div>
            </div>
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all">VIẾT ĐÁNH GIÁ</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Nguyễn Lan",
              initials: "NL",
              date: "2 tuần trước",
              rating: 5,
              comment: "Chiếc sofa này thực sự vượt xa mong đợi của tôi. Chất liệu nhung cực kỳ mềm mại và màu sắc thì sang trọng hơn hẳn trong ảnh. Giao hàng cũng rất chuyên nghiệp.",
              image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBN6j7jQuFmZJysxFDd_DR5qA4J49qh9zCkVHAvPi4w0oWlSTKUr_lcq1K6jYK9iOWVcS4yy-TaTKWL8nP7XCfg2VeuKaN-X-pggiF8p05uPOkCA0YGR9iGOFim6nVubZFiKWhe53xBEVlms7IXDPGtC9KNcLO54Jxg-4yP91aUGDd19TU_z5F3IfsswLa9SYnxyNV8lti9sequ7lsED8gxTBNaLwwX59uoIkcGb6aLn01CSaMGZaesgwidvZOmBg_LW7GlAq-c0fA"
            },
            {
              name: "Trần Minh",
              initials: "TM",
              date: "1 tháng trước",
              rating: 4,
              comment: "Thiết kế rất đẹp, phù hợp với căn hộ chung cư của tôi. Đệm ngồi êm ái, không bị lún sau thời gian dài sử dụng. Chỉ tiếc là thời gian chờ hàng hơi lâu một chút.",
            }
          ].map((review, i) => (
            <div key={i} className="p-8 bg-white border border-primary/5 rounded-2xl shadow-sm space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">{review.initials}</div>
                  <div>
                    <h4 className="font-bold text-slate-900">{review.name}</h4>
                    <p className="text-xs text-slate-400">Đã mua hàng • {review.date}</p>
                  </div>
                </div>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className={`w-4 h-4 ${j < review.rating ? 'fill-current' : 'opacity-20'}`} />
                  ))}
                </div>
              </div>
              <p className="text-slate-600 italic">"{review.comment}"</p>
              {review.image && (
                <div className="flex gap-2">
                  <img src={review.image} className="w-16 h-16 rounded-lg object-cover" alt="Review photo" referrerPolicy="no-referrer" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const CartPage = ({ 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  onContinueShopping 
}: { 
  cartItems: CartItem[], 
  onUpdateQuantity: (id: number, delta: number) => void, 
  onRemoveItem: (id: number) => void,
  onContinueShopping: () => void 
}) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 0; // Miễn phí
  const total = subtotal + shipping;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left: Cart Items */}
        <div className="flex-1 space-y-8">
          <div className="flex items-center justify-between border-b border-primary/10 pb-6">
            <h1 className="text-3xl font-black text-slate-900">Giỏ hàng của bạn</h1>
            <span className="text-slate-500 font-medium">{cartItems.length} sản phẩm</span>
          </div>

          {cartItems.length > 0 ? (
            <div className="space-y-6">
              <AnimatePresence mode="popLayout">
                {cartItems.map((item) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    key={item.id} 
                    className="flex gap-6 p-4 bg-white rounded-2xl border border-primary/5 shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <div className="w-32 h-32 rounded-xl overflow-hidden bg-primary/5 flex-shrink-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg text-slate-900 group-hover:text-primary transition-colors">{item.title}</h3>
                          <p className="text-xs text-slate-500 mb-2">{item.category}</p>
                          <div className="flex gap-4 text-xs font-medium text-slate-400">
                            <span>Màu: <span className="text-slate-900">{item.color || 'Mặc định'}</span></span>
                            <span>Size: <span className="text-slate-900">{item.size || 'Tiêu chuẩn'}</span></span>
                          </div>
                        </div>
                        <button 
                          onClick={() => onRemoveItem(item.id)}
                          className="p-2 text-slate-300 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="flex justify-between items-end">
                        <div className="flex items-center border border-primary/10 rounded-lg bg-background-light overflow-hidden">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-2 hover:bg-primary/5 text-primary transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-4 font-bold text-primary text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-2 hover:bg-primary/5 text-primary transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-black text-primary text-lg">${(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="py-20 text-center space-y-6">
              <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto">
                <ShoppingCart className="w-10 h-10 text-primary/40" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-slate-900">Giỏ hàng trống</h2>
                <p className="text-slate-500">Có vẻ như bạn chưa thêm sản phẩm nào vào giỏ hàng.</p>
              </div>
              <button 
                onClick={onContinueShopping}
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-all"
              >
                Tiếp tục mua sắm <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {cartItems.length > 0 && (
            <button 
              onClick={onContinueShopping}
              className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-5 h-5" /> Tiếp tục mua sắm
            </button>
          )}
        </div>

        {/* Right: Summary */}
        <div className="w-full lg:w-[400px] space-y-6">
          <div className="bg-white rounded-3xl border border-primary/10 p-8 shadow-sm space-y-8 sticky top-24">
            <h2 className="text-xl font-bold text-slate-900">Tóm tắt đơn hàng</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between text-slate-500 font-medium">
                <span>Tạm tính</span>
                <span className="text-slate-900">${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-500 font-medium">
                <span>Phí vận chuyển</span>
                <span className="text-emerald-600 font-bold">Miễn phí</span>
              </div>
              <div className="pt-4 border-t border-primary/10 flex justify-between items-end">
                <span className="text-lg font-bold text-slate-900">Tổng cộng</span>
                <div className="text-right">
                  <span className="block text-3xl font-black text-primary">${total.toLocaleString()}</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Đã bao gồm VAT</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Mã giảm giá" 
                  className="w-full bg-primary/5 border-none rounded-xl py-4 pl-5 pr-20 text-sm focus:ring-2 focus:ring-primary/20"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-primary text-white px-4 rounded-lg text-xs font-bold hover:opacity-90 transition-all">
                  Áp dụng
                </button>
              </div>
              <button className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                THANH TOÁN <ArrowRight className="w-6 h-6" />
              </button>
            </div>

            <div className="pt-6 space-y-4">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] text-center">Phương thức thanh toán</p>
              <div className="flex justify-center gap-4 opacity-40 grayscale hover:grayscale-0 transition-all">
                <CreditCard className="w-8 h-8" />
                <Landmark className="w-8 h-8" />
                <Banknote className="w-8 h-8" />
              </div>
            </div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-6 flex gap-4 items-start">
            <ShieldCheck className="text-primary w-6 h-6 flex-shrink-0" />
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-primary">Mua sắm an tâm</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Chính sách bảo hành 2 năm và đổi trả trong vòng 30 ngày cho mọi đơn hàng.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryDetailPage = ({ category, onBack, onProductClick }: { category: string, onBack: () => void, onProductClick: () => void }) => {
  const products = [
    { id: 1, title: "Ghế Ruby Greige", price: "6,500,000 VND", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkaZLYX4cfcXoMnsTaZ4Kihos_nd5h70_YXatvnGlchly6VT7T5nLIj-2H30F0TieZfFGstI2Lha2fkF7G-JKbyb9crUmDF_XR2o-3YfZ5vcWIAdfw1aJPXANC5UVCN9sGVX_o_bRz-XMARgCjOVnomPIruI0PWHO_x2Xj_e8E641CuJ2ijJuFzZG9UUAqab08Syc9aeZ20y4f_CaL7xEFdpHvoDwtNdbmJaYHYaJ-OSC7Bg6TJwLwCjt8RIxBpNovPma9M4dD1TI", isNew: true },
    { id: 2, title: "Ghế Xoay Swiver Gina Greige", price: "9,900,000 VND", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpb0x7bq-Lx3Bm1VmqSYNT5tFOG5gjxDWNhxGsCuSNJhAb85gEnXJDJdv8x1t0Ou7wVQrGYPhkRY0PAcEopQEsHY45ItUJitGvFRO3QRqK4jIcqWV4h6mUIpLFdLxYnkjetQSKR63nCa8TvvSWYlECyZMrLUTqyIX3DpTe2AwrgBUyEoEx0nVYePYDtlAtzTvFRBJGQLMNg99wtGq67o0Z4ecayhOsEmxUEiTZLHGsxk7ZOLdacVAaz1nwOmfHiQmhk60VsNWXg1U", isNew: false },
    { id: 3, title: "Ghế Ăn Coastal (M1)", price: "5,100,000 VND", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBh9vRA6HT74wTeFMo-pm6g1JCx_lz-Byv-k2rx-DYlhfAiuOTroXw1baPXry3evoS-NiXTnv2sTqg4RE_J73lVy5V_JgG5z465FWiCFnuauFy53BhWfi7qycajzfElZn9lZwIp9UwS-PEhQ1PBmTrHR1gHsxQfcO0-NeDQIa_AFz5B8T_GNI3pm3SwZWZLT8KrU8lfm5toEFLDZZBETMloaYs7bV4rw8N4zxzixRg6FUd-e-zhRmapj1nx32QHB3YQuJ9qqx9JcJI", isNew: false },
    { id: 4, title: "Ghế Ăn Coastal Kd1085-18", price: "5,100,000 VND", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANHRqQSJDZAohkWYgFkmVYqrQaUl93xmdbYpIXpNrBPlCWtN5DrkJv9xyHALjNJJCe_r4-elj1JLPg3AoJIsCbSJhGKnGgRLrLnybgVvuEGhkOJ7xCv-aYiDZSQB1n79kVj9A21Mk_vE0P0g-sn2m7d_Vk8MD1BASQJCFYQuKUtgsNdKIPVAR_Kh_MNCIDfI9UuSvfSZFbLjYc7xWcPdAsb9bKZiR5687BDZn_vtlD44ktmR0uADQ9nEkHQGE9_uPXrPPrItfsPf8", isNew: false },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Banner */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSFWdajHUpuqSDNVY73G267T4a8ZukuLG3v7YpKDHeyn1hAAdzmfdAAQPU6YzebUU0ky3qq0gvZ9t3ZNQ3SDuBmZyCMNEEjWS5adkx4SH3I1oIIbkNI4r73URwRglwyXvGa8-afztOWbCewb98kvUWDAef5WuKY2vtwpF6NNUEhv0mNeijNUtYFl5xgn2mmgmWQetl47oWHdzDo2WOLLampqavsdp5V0gOgWTMFX1UF7Oj61kdugjAYnVFIiinnvfA7OFVr2dzlUM" 
          className="w-full h-full object-cover brightness-75"
          alt={category}
        />
        <div className="absolute inset-0 flex flex-col justify-center px-12 text-white">
          <h1 className="text-5xl font-bold mb-4">{category}</h1>
          <div className="flex items-center gap-2 text-sm opacity-80">
            <button onClick={onBack} className="hover:underline">Trang chủ</button>
            <ChevronRight className="w-3 h-3" />
            <span>{category}</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-12 py-8 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-8">
          <div className="space-y-1">
            <p className="text-[10px] uppercase font-bold text-slate-400">Giá</p>
            <select className="bg-transparent border-none p-0 text-sm font-bold text-slate-900 focus:ring-0 cursor-pointer">
              <option>Theo giá: Thấp đến cao</option>
              <option>Theo giá: Cao đến thấp</option>
            </select>
          </div>
          <button className="bg-black text-white px-8 py-2 text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-all">
            Áp dụng
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer" onClick={onProductClick}>
            <div className="aspect-[3/4] mb-6 relative overflow-hidden bg-slate-50">
              <img 
                src={product.image} 
                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                alt={product.title}
                referrerPolicy="no-referrer"
              />
              {product.isNew && (
                <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-2 py-1 uppercase">New</div>
              )}
            </div>
            <div className="space-y-4 text-center">
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">{product.title}</h3>
              <div className="flex items-center justify-center gap-4">
                 <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                    <Heart className="w-4 h-4 text-slate-400" />
                 </button>
              </div>
              <p className="text-xs font-bold text-slate-900">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'category' | 'product-detail' | 'cart' | 'category-detail'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      title: "Ghế bành nhung Bắc Âu",
      category: "Ghế ngồi",
      price: 899.00,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkaZLYX4cfcXoMnsTaZ4Kihos_nd5h70_YXatvnGlchly6VT7T5nLIj-2H30F0TieZfFGstI2Lha2fkF7G-JKbyb9crUmDF_XR2o-3YfZ5vcWIAdfw1aJPXANC5UVCN9sGVX_o_bRz-XMARgCjOVnomPIruI0PWHO_x2Xj_e8E641CuJ2ijJuFzZG9UUAqab08Syc9aeZ20y4f_CaL7xEFdpHvoDwtNdbmJaYHYaJ-OSC7Bg6TJwLwCjt8RIxBpNovPma9M4dD1TI",
      quantity: 1,
      color: "Xanh Rừng Sâu",
      size: "Tiêu chuẩn"
    }
  ]);

  const addToCart = (product: any, quantity: number = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { ...product, quantity }];
    });
    setCurrentPage('cart');
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items => items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen">
      <Header 
        onNavigate={setCurrentPage} 
        onNavigateToCategoryDetail={(cat) => {
          setSelectedCategory(cat);
          setCurrentPage('category-detail');
        }}
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} 
      />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={() => setCurrentPage('category')} />
            <Categories onNavigate={() => setCurrentPage('category')} />
            <NewArrivals onNavigate={setCurrentPage} />
            <FeaturedCollection />
            <FeaturesBar />
          </>
        ) : currentPage === 'category' ? (
          <CategoryPage onProductClick={() => setCurrentPage('product-detail')} />
        ) : currentPage === 'category-detail' ? (
          <CategoryDetailPage 
            category={selectedCategory} 
            onBack={() => setCurrentPage('home')}
            onProductClick={() => setCurrentPage('product-detail')}
          />
        ) : currentPage === 'product-detail' ? (
          <ProductDetailPage 
            onBack={() => setCurrentPage('home')} 
            onNavigateToCategory={() => setCurrentPage('category')}
            onAddToCart={(qty) => addToCart({
              id: 1,
              title: "Ghế Sofa Nhung Bắc Âu",
              category: "Sofa & Ghế bành",
              price: 1299.00,
              image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSFWdajHUpuqSDNVY73G267T4a8ZukuLG3v7YpKDHeyn1hAAdzmfdAAQPU6YzebUU0ky3qq0gvZ9t3ZNQ3SDuBmZyCMNEEjWS5adkx4SH3I1oIIbkNI4r73URwRglwyXvGa8-afztOWbCewb98kvUWDAef5WuKY2vtwpF6NNUEhv0mNeijNUtYFl5xgn2mmgmWQetl47oWHdzDo2WOLLampqavsdp5V0gOgWTMFX1UF7Oj61kdugjAYnVFIiinnvfA7OFVr2dzlUM",
            }, qty)}
          />
        ) : (
          <CartPage 
            cartItems={cartItems} 
            onUpdateQuantity={updateQuantity} 
            onRemoveItem={removeItem}
            onContinueShopping={() => setCurrentPage('category')} 
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
