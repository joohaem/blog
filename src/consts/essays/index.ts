interface T {
  en?: string;
  ko: string;
}

interface Essay {
  id: string;
  publishedAt: Date;
  title: string;
  contents: T[];
}

export const ESSAYS: Essay[] = [
  {
    id: 'truly-happy',
    publishedAt: new Date('2025-11-01'),
    title: 'Truly Happy',
    contents: [
      {
        en: 'The feeling of being so good it brings you to tears — \ncomes from the quality of life, once envy is removed.',
        ko: '눈물 나게 좋다는 감정은 삶의 질에서 질투를 뺀 것에서 비롯된다.'
      },
      {
        ko: '-'
      },
      {
        en: 'A love for the thing itself,',
        ko: '대상에 대한 사랑,'
      },
      {
        en: 'Gratitude for the space to breathe,',
        ko: '여유에 대한 감사,'
      },
      {
        en: 'A sense of efficacy in one’s actions.',
        ko: '행위에 대한 효능감.'
      }
    ]
  },
  {
    id: 'trip-with-older-sister-and-family',
    publishedAt: new Date('2024-02-08'),
    title: 'Trip with older sister and family',
    contents: [
      {
        en: `Siblings teach us that it's possible to think differently, even within the same environment.`,
        ko: '형제자매는 ‘같은 환경에서 할 수 있는 다른 생각’을 가르쳐준다.'
      },
      {
        en: 'Even under the same parents, we each carry different emotions and make different choices.',
        ko: '같은 부모 아래에서 다른 감정을 가지고, 다른 행동을 하고.'
      },
      {
        en: `As a child, I simply followed my older sister, \nbut over time, as I began to notice different perspectives, \nperhaps I had already been learning—quietly and naturally—how to accept and live with those differences.`,
        ko: '누나만 따라하던 나였지만, 다른 생각들이 보일 때 \n그것들에 익숙해지고 받아들이는 연습을 했지 않았을까 싶다.'
      },
    ]
  },
  {
    id: 'definition-of-romance',
    publishedAt: new Date('2023-07-15'),
    title: 'Definition of Romance',
    contents: [
      {
        en: 'There’s a certain superiority that only those with a sense of romance possess.',
        ko: '낭만을 가진 사람만이 갖는 우월함이 있다.'
      },
      {
        en: 'Unlike those who see only what’s right in front of them, \nthey look at life with a wider lens —\nfinding meaning even in uncertainty.',
        ko: '당면한 일만 바라보는 이보다, 본인 삶을 넓게 바라보며 불확실함에 의미를 새기는 이들.'
      },
      {
        en: 'They have a passion for savoring time itself, \nand for increasing the frequency of such moments.',
        ko: '시간을 누리는 빈도, 그걸 늘려가려는 열정이 있다.'
      },
      {
        en: 'There is a kind of romance in those who treat "thing"s not merely as means to an end, \nbut who see value in the very act of doing —\ndrawing energy not from the outcome, but from the essence of the "thing" itself.',
        ko: 'thing 을 수단으로 여겨 thing 의 결과를 원동력 삼지 않고, thing 의 의의를 수단으로 여겨 thing 자체를 원동력 삼는 사람이 가지는 낭만이 있다.'
      }
    ]
  },
  {
    id: 'grandma-s-essay',
    publishedAt: new Date('2021-02-14'),
    title: 'Grandma’s Essay',
    contents: [
      {
        en: 'My grandmother writes essays.',
        ko: '할머니는 글을 쓰신다.'
      },
      {
        en: 'She recently gave me a collection of her writings.',
        ko: '최근에 수필집을 선물 받았다.'
      },
      {
        ko: '-'
      },
      {
        en: `I've always loved stories about people.`,
        ko: '나는 사람 이야기를 좋아한다.'
      },
      {
        en: `Rather than fantasy films, I prefer movies that quietly portray a person's life.`,
        ko: '판타지 영화보다는 한 사람의 삶을 담담하게 그린 영화가 좋다.'
      },
      {
        en: 'So imagine how special a book would be that holds my grandmother’s thoughts from 20 years ago.',
        ko: '20년 전 할머니 생각이 담긴 책이라면 오죽할까.'
      },
      {
        en: `It's the only book that calls my grandfather "my husband," and my mother "my daughter-in-law."`,
        ko: '나의 할아버지를 내 남편이라고, 엄마를 며느리라고 칭하는 유일무이한 책이다.'
      },
      {
        ko: '-'
      },
      {
        en: 'I wonder if, someday, my own children or grandchildren would feel the same joy reading my story.',
        ko: '나도 훗날 자녀, 손주에게 내 이야기를 전하면 기뻐할까.'
      },
      {
        en: `Even though I'm not good at writing, maybe thanks to social media, it might still be possible.`,
        ko: '작문에 소질이 없어도 SNS 덕에 가능할지도 모르겠다.'
      },
    ]
  }
].sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
