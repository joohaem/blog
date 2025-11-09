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
    id: 'the-meaning-of-emotions',
    publishedAt: new Date('2025-09-28'),
    title: 'The Meaning of Emotions',
    contents: [
      {
        en: 'The meaning of life differs for everyone.',
        ko: '사람마다의 삶의 의미는 다르다.'
      },
      {
        en: 'Yet what embraces those diverse meanings is their emotion.',
        ko: '하지만 그 다양한 의미를 아우르는 것은 그들의 감정이다.'
      },
      {
        ko: '-'
      },
      {
        en: 'For me, feelings such as gratitude, affection, self-esteem, hope, and satisfaction point me in the direction I wish to go.',
        ko: '나에게 있어서 감사, 애착, 자존, 희망, 만족과 같은 감정은 나아가고자 하는 방향이다.'
      },
      {
        en: 'Reason exists to help me plan and adjust along the way.',
        ko: '그에 대한 계획과 조율을 위해서야 이성이 중시된다.'
      },
      {
        en: 'In the pursuit of meaning and happiness, emotion is the core—\nwhile reason and logic are merely tools to shape and harmonize it.',
        ko: '삶의 의미와 행복에 있어 감정이 중심이며, 이성과 논리는 이를 조율하는 도구일 뿐이다.'
      },
    ]
  },
  {
    id: 'empathy-through-facial-expressions',
    publishedAt: new Date('2025-08-10'),
    title: 'Empathy through Facial Expressions',
    contents: [
      {
        en: 'Emotion triggers physiological responses\nand evokes unconscious expressions on our faces.',
        ko: '정서는 생리반응을 일으키고, 표정이라는 무의식적인 행동을 야기한다.'
      },
      {
        en: 'When listening to music,\nI find myself watching the performer’s face\nrather than the dazzling movement of their hands.',
        ko: '음악을 감상할 때는, 연주자의 현란한 손놀림보다 그 표정을 바라본다.'
      },
      {
        en: 'When I sense the intention, the method,\nand the emotion behind their performance,\nevery nerve in my body naturally aligns with the music.',
        ko: '어떤 의도와 방식으로, 그리고 무슨 감정으로 음악을 표현하는지 느낄 때, 온 신경이 자연스럽게 대상에 집중된다.'
      },
      {
        en: 'That shiver down the spine —\nthe kind of immersion that makes you frown without realizing —\nit always begins with empathy.',
        ko: '전율이 일고, 표정이 절로 찡그려질 만큼의 몰입은 언제나 공감 에서 시작된다'
      },
    ]
  },
  {
    id: 'verbalizing-my-thoughts',
    publishedAt: new Date('2025-04-12'),
    title: 'Verbalizing my Thoughts',
    contents: [
      {
        en: 'There are countless times when we take others’ opinions from books or videos\nand make them our own beliefs without question.',
        ko: '책이나 영상을 보며 타인의 의견을 곧바로 자신의 신념으로 삼는 일이 수없이 많다.'
      },
      {
        en: 'Yet in those borrowed, worn-out thoughts, there is no sense of vitality.',
        ko: '하지만 타인의 낡은 의견에는 살아있음의 생기가 전혀 느껴지지 않는다.'
      },
      {
        en: 'Nietzsche once said that to truly have your own opinion,\nyou must delve deep into your own thoughts and put them into words.',
        ko: '자신의 의견을 가지기 위해서는 스스로 자신의 생각을 깊이 파고들어 언어화 해야 한다고 니체 는 말한다.'
      },
      {
        ko: '-'
      },
      {
        en: 'That’s where the emphasis lies — in “verbalizing” your thinking.',
        ko: '여기서의 주안점은 언어화를 하는 것이다.'
      },
      {
        en: 'Conversations with friends often help:\na question you hadn’t considered can spark a thought you never had before.',
        ko: '친구와의 대화를 통해 생각치 못한 질문을 받고 하지 않았던 사고를 하며 말로 내뱉는 것이 큰 도움이 된다.'
      },
      {
        en: 'But even better is to step away from the gaze of others —\nto reflect quietly on a line from a book,\nand unfold your thoughts through writing.',
        ko: '그리고 그보다 좋은 것은, 타인의 시선과 동떨어진 채, 책에서 접한 구절을 토대로 사색을 하며 글로 풀어내는 것이다.'
      },
      {
        en: 'Thoughts expressed in words soon become your own.',
        ko: '이렇게 표현된 언어는 곧 내 생각으로 정립된다.'
      },
      {
        en: 'And that process, much like encountering a beautiful work of art,\nelevates the soul to a higher plane.',
        ko: '그리고 그 과정은 아름다운 예술 작품을 접하는 것만큼이나 영혼을 높은 차원으로 이끈다.'
      },
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
  },
].sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
