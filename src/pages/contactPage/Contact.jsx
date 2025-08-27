const Contact = () => {
  return (
    <section>
      <div className="w-full text-center mx-auto py-10 ">
        <div className="w-[80%] h-150 max-md:h-100 mx-auto grid grid-cols-1">
          <iframe
            className="w-full h-full rounded-2xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d841.0014448629263!2d85.34823062576756!3d27.68037806671903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f3737cdca9%3A0x8e75f923acd515e7!2sLotus%20Boys%20Hostel!5e1!3m2!1sen!2snp!4v1755666551896!5m2!1sen!2snp"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <hr className="w-[90%] h-[0.1px] mx-auto" />
    </section>
  );
};

export default Contact;
