import {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import EarthCanvas from './Earth';

//amCUfux5GkzgIHTRN
// service_0yqfs2i
//template_syac6xm
const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setLoading(true); 

        emailjs.send(
          'service_0yqfs2i',
          'template_syac6xm',
          {
            from_name: form.name,
            to_name: 'Khady',
            from_email: 'adeolakhadijat59@gmail.com',
            message: form.message
          },
          'amCUfux5GkzgIHTRN'
        )
        .then(()=>{
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: ''
          })
        }, (error)=> {
          setLoading(false);
          console.log(error);
          alert('Something went wrong');
        })
    }

    const slideInLeft = {
      hidden: { x: '-100vw' }, // Off-screen to the left
      visible: { x: 0, transition: { duration: 1, type: 'tween', stiffness: 120 } } // Slides in from left
  };
 
  const slideInRight = {
    hidden: { x: '100vw' }, // Off-screen to the left
    visible: { x: 0, transition: { duration: 1, type: 'tween', stiffness: 120 } } // Slides in from left
};

  return (
    <div className='mx-10 md:mx-32 lg:mx-40 '>
      <div className='flex flex-col lg:flex-row gap-6'>

      <div className='w-full lg:w-1/2'>
      <div className='w-full bg-indigo-950/40 rounded-xl p-4 pt-6 md:p-10 overflow-hidden' id='contact'>
        <p className='font-semibold text-sm md:text-md text-offwhite'>GET IN TOUCH</p>
        <h1 className='font-bold text-white text-2xl md:text-4xl my-4'>Contact</h1>
        <div className='mt-10'>
          <form ref={formRef} onSubmit={handleSubmit}>
            <label className='text-white font-semibold '>Your Name</label><br />
            <input type="text" name="name" value={form.name} onChange={handleChange} className='bg-indigo-950 text-offwhite w-full rounded-lg py-3 px-6 mt-3 mb-6 border-none focus:outline-none placeholder:text-offwhite font-semibold' placeholder='What is your name?' />

            <label className='text-white font-semibold '>Your Email</label><br />
            <input type="email" name="email" value={form.email} onChange={handleChange} className='bg-indigo-950 text-offwhite w-full rounded-lg py-3 px-6 mt-3 mb-6 border-none focus:outline-none placeholder:text-offwhite font-semibold' placeholder='What is your email?' />

            <label className='text-white font-semibold '>Your Message</label><br />
            <textarea rows="6" type="text" name="message" value={form.message} onChange={handleChange} className='bg-indigo-950 text-offwhite w-full rounded-lg py-3 px-6 mt-3 mb-6 border-none focus:outline-none placeholder:text-offwhite font-semibold' placeholder='What do you want to say?' />

            <button type='submit' className='font-bold px-4 py-2 bg-indigo-950 text-white rounded-lg border-none outline-none shadow-xl'>{loading ? 'Sending...' : 'Send'}</button>
            </form>
        </div>
      </div>
      </div>
      <div className='w-full lg:w-1/2'>
        <EarthCanvas />
      </div>
      </div>
    </div>
  )
}

export default Contact
