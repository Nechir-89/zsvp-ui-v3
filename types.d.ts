type Meta = {
  pagination: {
    page: number,
    pageSize: number,
    pageCount: number,
    total: number
  }
}

type SocialMedia = {
  id: number,
  attributes: {
    title: string,
    link: string,
    colorCode: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    // for logos we are expecting to have only svg format images
    logo: {
      data: {
        id: number,
        attributes: {
          name: string,
          alternativeText: string,
          caption: string,
          width: number,
          height: number,
          formats: string,
          hash: string,
          ext: string,
          mime: string,
          size: number,
          url: string,
          previewUrl: string,
          provider: string,
          provider_metadata: string,
          createdAt: string,
          updatedAt: string,
        }
      }
    }
  }
}

type SocialMedias = {
  data: SocialMedia[],
  meta: Meta
}

type HomePageData = {
  id: number,
  attributes: {
    zsvpIntroductionText: string,
    locale: string,
    Image: {
      data: {
        id: number,
        attributes: {
          url: string
        }
      }[]
    }
  }
}

type HomePage = {
  data: HomePageData
}

type Testimonial = {
  id: number,
  attributes: {
    author: string,
    positionAndCompany: string,
    testimonial: string,
    lang: string,
    image: {
      data: {
        id: number,
        attributes: {
          alternativeText: string,
          url: string
        }
      }
    }
  }

}

type Testimonials = {
  data: Testimonial[],

}

type NewsDocument = {
  id: number,
  link: string,
  doc_title: string,
  doc_desc: string,
  docs: {
    data: {
      id: number,
      attributes: {
        url: string,
      }
    }
  }
}

type NewsPhoto = {
  id: number,
  attributes: {
    alternativeText: string,
    url: string,
    width: number,
    height: number
  }
}

type NewsPhotos = {
  data: NewsPhoto[] | null
}

type News = {
  id: number,
  attributes: {
    title: string,
    newsExcerpt: string,
    news: string,
    lang: string
    publishedAt: string,
    customPublishedDate: string,
    featuredImage: {
      data: {
        id: number,
        attributes: {
          alternativeText: string,
          url: string,
        }
      }
    },
    photos?: NewsPhotos,
    documents?: NewsDocument[] | []
  }
}

type AllNews = {
  data: News[] | []
}

type Partners = {
  data: {
    id: number,
    attributes: {
      logo: {
        data: {
          id: number,
          attributes: {
            alternativeText: string,
            url: string
          }
        }
      }
    }
  }[]
}

type Contacts = {
  data: {
    id: number,
    attributes: {
      type: string,
      value: string,
      icon: {
        data: {
          id: number,
          attributes: {
            alternativeText: string,
            url: string
          }
        }
      }
    }
  }[]
}

type ZSVPLocation = {
  data: {
    id: number,
    attributes: {
      url: string,
      icon: {
        data: {
          id: number,
          attributes: {
            alternativeText: string,
            url: string
          }
        }
      }
    }
  }
}

type ApplicationDevelopmentDetails = {
  data: {
    id: number,
    attributes: {
      name: string,
      link: string,
      color: string,
      logo: {
        data: {
          id: number,
          attributes: {
            alternativeText: string,
            url: string
          }
        }
      }
    }
  },
}

type AboutItem = {
  id: number,
  attributes: {
    title: string,
    body: string
  }
}

type AboutItems = {
  data: AboutItem[]
}

type Link = {
  id: number,
  link: string,
  title: string,
}

type Job = {
  id: number,
  attributes: {
    title: string,
    Location: string,
    Type: string,
    openDate: string,
    closeDate: string,
    positions: number,
    textLang: string,
    body: string,
    howToApply: string,
    links: Link[] | []
  }
}

type Jobs = {
  data: Job[] | [],
  meta: Meta
}


type Tender = {
  id: number,
  attributes: {
    title: string,
    openDate: string,
    closeDate: string,
    textLang: string,
    body: string,
    howToApply: string,
    links: Link[] | []
  }
}

type Tenders = {
  data: Tender[] | [],
  meta: Meta
}

type Alert = {
  id: number,
  attributes: {
    title: string,
    type: string,
    text: string,
    active: boolean,
    lang: string,
  }
}

type Alerts = {
  data: Alert[] | [],
  meta: Meta
}
