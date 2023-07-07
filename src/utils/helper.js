export function getChipData() {
  const chipList = [
    "All",
    "Tamil Cinema",
    "News",
    "Mixes",
    "Music",
    "England cricket team",
    "Wickets",
    "Live",
    "A. R. Rahman",
    "Driving",
    "Stock Markets",
    "Melodies",
    "Train",
    "Politics",
    "Football",
    "Tamil Cinema",
    "News",
    "Mixes",
    "Music",
    "England cricket team",
    "Wickets",
    "Live",
    "A. R. Rahman",
    "Driving",
    "Stock Markets",
    "Melodies",
    "Train",
    "Politics",
    "Football",
  ];
  return chipList.map((i, index) => {
    return {
      isActive: index == 0,
      value: i,
    };
  });
}

export function getVideoData() {
  const videosList = [
    {
      heading:
        "ஆதரவு தெரிவித்த முதல்வருக்கு சீமான் அதிரடி பதில் | Seeman | Mk Stalin | PTS",
      duration: "4:04",
      channelName: "PuthiyathalaimuraiTV",
      viewsCount: "149K",
      uploadedTime: "15 hours",
      channelLogo:
        "https://yt3.ggpht.com/5ZtoCHyWV95KdgDkYjVfhC1TCdZjHHE8_ar96Uvd8ulPp9rPbKhyds_ULHZUTdR27_XMdGbcLPE=s68-c-k-c0x00ffffff-no-rj",
      channelLink: "https://www.youtube.com/@PuthiyaThalaimuraiTV",
      thumbnail:
        "https://i.ytimg.com/vi/ALWjVHIExeI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDL7Zm14xWoOPoSjNTGYTgAf9oCPA",
    },
    {
      heading:
        "கோகுல்ராஜ் கொலை வழக்கு! பாண்டே சாட்சிக்கு வராதது ஏன்? | Adv Bhavani B.Mohan Interview | IBC Tamil",
      duration: "38:49",
      channelName: "IBC Tamil",
      viewsCount: "3,582",
      uploadedTime: "2 days",
      channelLogo:
        "https://yt3.googleusercontent.com/2ZFXZvc61QrDrSh2Vb1Klo_PJrOncCS20B2ut9ROD9EkIJFPnvXtk_cn38OTLZnrOH3_9FA=s176-c-k-c0x00ffffff-no-rj",
      channelLink: "https://www.youtube.com/@IBCTamil",
      thumbnail:
        "https://i.ytimg.com/vi/GBv6wF83kX0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYMnCPP4_tKnqXnyYRwQ4BwcDXjA",
    },
    {
      heading:
        "Stokes Stars In Opener! | England vs South Africa - Match Highlights | ICC Cricket World Cup 2019",
      duration: "5:16",
      channelName: "ICC",
      viewsCount: "14M",
      uploadedTime: "4 years",
      channelLogo:
        "https://yt3.googleusercontent.com/3K6h6gpMPf4mK9qh6SXTl0W3PLxnOMzUnFHc2lbS9t-ucS-b4JGcR8nW7ja9XDYkHM-kAnijk2c=s176-c-k-c0x00ffffff-no-rj",
      channelLink: "https://www.youtube.com/@ICC",
      thumbnail:
        "https://i.ytimg.com/vi/95Ia6yBcnXI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBo32vuvcT5HUC2ID8LwIWi8zvTiw",
    },
    {
      heading:
        "ITC Vs RELIANCE Vs TATAITC Vs ரிலையன்ஸ் Vs டாடா |Anandsrinivasan| |Albin|",
      duration: "21:24",
      channelName: "Money Pechu",
      viewsCount: "21K",
      uploadedTime: "6 hours",
      channelLogo:
        "https://yt3.googleusercontent.com/FI3JpLNr5OFwX1rLntohcQeKn5yv5clMuCmAascJzPPdGHUcuUPhnvOz3pYvwS4qOEZxGKXecA=s176-c-k-c0x00ffffff-no-rj",
      channelLink: "https://www.youtube.com/@MoneyPechu",
      thumbnail:
        "https://i.ytimg.com/vi/jA8lhy2Eh7s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCrEGBGSaRKyIwEXjZbbTIhvg2e0w",
    },
    {
      heading:
        "Inside Report From Station Panel Control Room | Odisha Train Accident",
      duration: "21:24",
      channelName: "Hindustan Times",
      viewsCount: "130K",
      uploadedTime: "5 hours",
      channelLogo:
        "https://yt3.googleusercontent.com/PkHy298NcLen2IGd0jO7m29FC8wfCYRIBplND1ZgheqIVSLjq0b-RQlu_pEfKoSpX6lcqRVGSA=s176-c-k-c0x00ffffff-no-rj",
      channelLink: "https://www.youtube.com/@HT-Videos",
      thumbnail:
        "https://i.ytimg.com/vi/sBigT3BOrcI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTuTPoxRGq9YEhVDsDMU89UqCJgQ",
    },
    {
      heading:
        "Jimmy With The New Ball 🙌 | Watch Anderson's Lord's Opening Spell | England v New Zealand 2022",
      duration: "4:58",
      channelName: "England & Wales Cricket Board",
      viewsCount: "15.1M",
      uploadedTime: "11 months",
      channelLogo:
        "https://yt3.googleusercontent.com/fRTh6Q0FUUZ50HFjtiUw_5DeDhQy87dhpUOdLzPySHsZXipNu3lpD4R9oxyKUzXY_DDUVPZB=s176-c-k-c0x00ffffff-no-rj",
      channelLink: "https://www.youtube.com/@officialenglandcricket",
      thumbnail:
        "https://i.ytimg.com/vi/5upQGvf22qA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTFbTlc9DsT239YDQFRKjYIoBsAA",
    },
    {
      heading:
        "Easy Reverse Technique in Car | Reference points for reverse | Reverse எளிதான முறை | Birlas Parvai",
      duration: "14:14",
      channelName: "Birlas Parvai",
      viewsCount: "140K",
      uploadedTime: "1 year",
      channelLogo:
        "https://yt3.googleusercontent.com/ytc/AGIKgqNvT1RMvv2LdTJRuhbg4AR_hHXRuiIDG4UqmqGyNg=s176-c-k-c0x00ffffff-no-rj",
      channelLink: "https://www.youtube.com/@birlasparvai",
      thumbnail:
        "https://i.ytimg.com/vi/OZUdsMwdJfo/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdMSBD-L1Q3oLWd-cYc1s_ObqqtQ",
    },
  ];
  return videosList;
}
