import {
  Body,
  Button,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';

interface SignupFollowupProps {
  name: string;
}

const SignupFollowupTemplate = ({ name }: SignupFollowupProps) => {
  return (
    <Html lang="en">
      <Head>
        <Font
          fontFamily="Rooboto"
          fallbackFontFamily="Verdana"
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>

      <Preview>
        Join Valoria today and take the first step toward your best self.
      </Preview>

      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: '#007291',
              },
            },
          },
        }}
      >
        <Body>
          <Container
            style={{
              border: '1px solid #e6e6e6',
            }}
            className="max-w-[598px] w-full py-10 font-normal"
          >
            {/* Heading */}
            <Section>
              <Img
                src="https://utfs.io/f/ynbg37I9jcW2BPgfkeeU6N85WkQYmvdDKXEHoTLbqnM3sPuc"
                alt="Freepick.com"
                className="w-[72px] h-auto mx-auto my-0"
              />

              <div className="text-center mt-10">
                <Heading className="font-semibold text-2xl my-0 mb-2.5">
                  Are You In?
                </Heading>

                <Text className="font-normal m-0 p-0">
                  The second-best time to start is now.
                </Text>
              </div>
            </Section>

            {/* Wallpaper */}
            <Img
              src="https://utfs.io/f/ynbg37I9jcW2WQiKcRYRh7TKUyMS1EjQC5bcptrq93gDJiB2"
              alt="Freepick.com"
              className="w-full object-contain my-10"
            />

            {/* TEXT */}
            <Section className="px-10">
              <Text className="m-0 text-sm font-normal">Hey {name},</Text>

              <Text>
                We’re thrilled to have you join the Valoria community! Whether
                you’re new to fitness or a seasoned pro, we’re here to support
                you every step of the way.
              </Text>

              <Text>
                At Valoria, we believe that every moment is an opportunity to
                redefine your limits. Whether you're chasing strength,
                endurance, or balance, we’re here to help you achieve your
                fitness goals on your terms.
              </Text>

              <Text className="text-base font-medium pt-2.5">
                Here’s what you’ll get with a Valoria membership:
              </Text>

              <ul className="list-disc text-sm pl-6">
                <li>Personalized Fitness Plans</li>
                <li>Exclusive App Access</li>
                <li>24/7 Gym Availability</li>
              </ul>

              <Text>So, what are you waiting for? The next step is yours.</Text>

              <Button
                href="https://www.instagram.com/omiya.zen"
                className="text-sm text-white bg-neutral-900 py-2.5 px-5 mt-6 rounded-full"
              >
                Join Now
              </Button>
            </Section>

            {/* Footer */}
            <Section className="px-10 pt-16">
              <Img
                src="https://utfs.io/f/ynbg37I9jcW2BPgfkeeU6N85WkQYmvdDKXEHoTLbqnM3sPuc"
                alt="logo"
                className="w-[72px] h-auto my-0"
              />

              <div className="mt-6 text-sm">
                <div className="mb-2">Questions?</div>

                <div>
                  We’re here to help:{' '}
                  <a href="mailto:support@velora.com" className="text-black">
                    support@velora.com
                  </a>
                </div>

                <div className="mt-2">
                  Follow us for fitness tips and updates:{' '}
                  <a
                    href="https://www.instagram.com/omiya.zen"
                    target="_blank"
                    className="text-black"
                  >
                    Instagram
                  </a>
                  ,{' '}
                  <a
                    href="https://www.instagram.com/omiya.zen"
                    target="_blank"
                    className="text-black"
                  >
                    Youtube
                  </a>
                </div>
              </div>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default SignupFollowupTemplate;
