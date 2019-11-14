import React from 'react';
import Head from 'next/head';

const Mailchimp = () => {
  const [email, setEmail] = React.useState('');
  return (
    <div>
      <Head>
        <link
          href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
          rel="stylesheet"
          type="text/css"
        />
        <style jsx>{`
          #mc_embed_signup {
            background: #fff;
            clear: left;
            font: 14px Helvetica, Arial, sans-serif;
            width: 100%;
          }
        `}</style>
      </Head>
      <div id="mc_embed_signup">
        <form
          action="https://gmail.us3.list-manage.com/subscribe/post?u=65fc2d9d1e01cff1b4aaf8139&amp;id=df9d73ff4d"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <label htmlFor="mce-EMAIL">
              Entérate de nuestro CFP, boletas, etc...
            </label>
            <input
              type="email"
              value={email}
              name="EMAIL"
              className="email"
              onChange={e => setEmail(e.target.value)}
              id="mce-EMAIL"
              placeholder="tu@email.com"
              required
            />
            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_65fc2d9d1e01cff1b4aaf8139_df9d73ff4d"
                tabIndex="-1"
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
          </div>
        </form>
        <style jsx>{`
          #mc_embed_signup {
            margin-top: 20px;
            padding-left: 20px;
            padding-right: 20px;
          }

          #mc_embed_signup .button {
            background: #f7be16;
            color: #fffbea;
            text-shadow: 1px 1px 1px rgb(138, 104, 1);
            font-weight: bold;
            -webkit-appearance: none;
            border-radius: 0 5px 5px 0;
          }

          #mce-EMAIL {
            border-radius: 5px 0 0 5px !important;
          }

          @media (max-width: 768px) {
            #mce-EMAIL,
            #mc_embed_signup .button {
              border-radius: 5px !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Mailchimp;
