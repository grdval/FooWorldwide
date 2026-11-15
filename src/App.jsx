import { useEffect, useMemo, useRef, useState } from 'react';
import fooLogo from './assets/foofinal.png';
import dwightFooImage from './assets/dwightfoo.jpg';
import zetsFooImage from './assets/zetsfoo.jpg';
import zetsgifBackground from './assets/zetsfoo.gif';
import zetsAudio from './assets/zetsfoo.mp3';
import gaddyFooImage from './assets/gaddyfoo.jpg';
import egoFooImage from './assets/egofoo.jpg';
import egoGifBackground from './assets/egofoo.gif';
import egoAudio from './assets/egofoo.mp3';
import pistolFooImage from './assets/pistol.jpg';
import pistolGifBackground from './assets/pistol.gif';
import pistolAudio from './assets/pistol.mp3';
import banfooImage from './assets/banfoo.jpg';
import banGifBackground from './assets/banfoo.gif';
import banAudio from './assets/banfoo.mp3';
import senjhuFooImage from './assets/senjhufoo.jpg';
import kuriFooImage from './assets/kurifoo.jpg';
import kuriGifBackground from './assets/Kurifoo.gif';
import kuriAudio from './assets/kurifoo.mp3';
import gaddyGifBackground from './assets/gaddyfoo.gif';
import gaddyAudio from './assets/gaddyfoo.mp3';
import santinoGifBackground from './assets/santinofoo.gif';
import santinoAudio from './assets/satinofoo.mp3';
import soleilFooImage from './assets/soleilfoo.jpg';
import soleilGifBackground from './assets/soleilfoo.gif';
import soleilAudio from './assets/soleilfoo.mp3';
import amorFooImage from './assets/amorfoo.jpg';
import amorGifBackground from './assets/amorfoo.gif';
import amorAudio from './assets/amorfoo.mp3';
import santinofooImage from './assets/santinofoo.jpg';
import lazyfooImage from './assets/lazyfoo.jpg';
import lazyGifBackground from './assets/lazyfoo.gif';
import lazyAudio from './assets/lazyfoo.mp3';
import unofooImage from './assets/unofoo.jpg';
import unoGifBackground from './assets/unofoo.gif';
import unoAudio from './assets/unofoo.mp3';
import dwightGifBackground from './assets/dwightfoo.gif';
import dwightAudio from './assets/dwightfoo.mp3';
import senjhuAudio from './assets/senjhufoo.mp3';
import senjhugifBackground from './assets/senjhufoo.gif';
import wyofooImage from './assets/wyofoo.jpg';
import wyoGifBackground from './assets/wyofoo.gif';
import wyoAudio from './assets/wyofoo.mp3';
import ilafooImage from './assets/ilafoo.jpg';
import ilaaudio from './assets/ilafoo.mp3';
import ilaGifBackground from './assets/ilafoo.gif';
import sumiFooImage from './assets/sumifoo.jpg';
import sumiAudio from './assets/sumifoo.mp3';
import sumiGifBackground from './assets/sumifoo.gif';
import trustyFooImage from './assets/trustyfoo.jpg';
import trustyAudio from './assets/trustyfoo.mp3';
import trustyGifBackground from './assets/trustyfoo.gif';
import santifooImage from './assets/santifoo.jpg';
import santifooAudio from './assets/santifoo.mp3';
import santifooGifBackground from './assets/santifoo.gif';
import karmaFooImage from './assets/karmafoo.jpg';
import karmaAudio from './assets/karmafoo.mp3';
import karmaGifBackground from './assets/karmafoo.gif';
import kinneFooImage from './assets/kinnefoo.jpg';
import kinneGifBackground from './assets/kinnefoo.gif';
import kinneAudio from './assets/kinnefoo.mp3';
import dosfooImage from './assets/dosfoo.jpg';
import dosAudio from './assets/dosfoo.mp3';
import dosGifBackground from './assets/dosfoo.gif';
import renzofooImage from './assets/renzofoo.jpg';
import renzoAudio from './assets/renzofoo.mp3';
import renzoGifBackground from './assets/renzofoo.gif';
import daisukeFooImage from './assets/daisukefoo.jpg';
import daisukeAudio from './assets/daisukefoo.mp3';
import daisukeGifBackground from './assets/daisukefoo.gif';



const normalizeMemberSlug = (slug) => String(slug || '').trim().toLowerCase();

const memberDirectory = [
  {
    slug: 'ban-foo',
    name: 'Ban Foo',
    category: 'OWNER',
    aliases: ['Vargas', 'Who', 'Demeo', 'Richman', 'Blast', 'ᴀʟQᴜɪᴢᴀʀ', 'Swaggero'],
    youtubeUrl: 'https://www.youtube.com/@BanSwaggero',
    tiktokUrl: 'https://www.tiktok.com/@why.bannn',
    image: banfooImage,
    
  },
  {
    slug: 'renzo-foo',
    name: 'Renzo Foo',
    category: 'GODS',
    aliases: [' Richman', 'Sauceman', 'Swaggero'],
    youtubeUrl: 'https://www.youtube.com/@RenzoRichman/videos',
    tiktokUrl: 'https://www.tiktok.com/@kupalkaba20005',
    image: renzofooImage,
    
  },
  {
    slug: 'santino-foo',
    name: 'Santino Foo',
    category: 'GODS',
    aliases: ['RICHMAN', 'MAYBACH', 'SWAGGERO', 'BLAST'],
    youtubeUrl: 'https://youtube.com/@santino2iceyyyyy?si=uzKTlY23kdaQFRo2',
    tiktokUrl: 'https://www.tiktok.com/@santinotoohigh',
    image: santinofooImage,
    
  },
  {
    slug: 'pistol-foo',
    name: 'P Foo',
    category: 'GODS',
    aliases: ['Helstrom', 'Swaggero', 'Richman'],
    youtubeUrl: 'https://www.youtube.com/@theyhate.p',
    tiktokUrl: 'https://www.tiktok.com/@freestyle.pxx',
    image: pistolFooImage,
    
  },
  {
    slug: 'uno-foo',
    name: 'Uno Foo',
    category: 'HEAD FOO',
    aliases: ['RICHMAN', 'MALLARI', 'TH$'],
    youtubeUrl: ' https://www.youtube.com/@UnoRxchmn',
    tiktokUrl: ' https://www.tiktok.com/@wehfritzuno',
    image: unofooImage,
    
  },
  {
    slug: 'dos-foo',
    name: 'Dos Foo',
    category: 'HEAD FOO',
    aliases: ['RICHMAN'],
    youtubeUrl: 'https://www.youtube.com/@WehNas',
    tiktokUrl: ' https://www.tiktok.com/@_naszxc',
    image: dosfooImage,
    
  },
  {
    slug: 'kuri-foo',
    name: 'Kuri Foo',
    category: 'HEAD FOO',
    aliases: ['Who', 'Kushman'],
    youtubeUrl: '',
    tiktokUrl: 'https://www.tiktok.com/@_kuurii',
    image: kuriFooImage,
    
  },
  {
    slug: 'zets-foo',
    name: 'Zets Foo',
    category: 'HEAD FOO',
    aliases: ['Who', 'Diaz'],
    youtubeUrl: '',
    tiktokUrl: 'https://www.tiktok.com/@zetss32',
    image: zetsFooImage,
    
  },
  {
    slug: 'gaddy-foo',
    name: 'Gaddy Foo',
    category: 'HEAD FOO',
    aliases: ['Lue', 'Blast'],
    youtubeUrl: 'https://youtube.com/@gaddyforyu?si=I3XPPe0-W6qG26Q0',
    tiktokUrl: 'https://www.tiktok.com/@gaddyforyu?_r=1&_t=ZS-9BG166mzcTG',
    image: gaddyFooImage,
   
  },
  {
    slug: 'ego-foo',
    name: 'Ego Foo',
    category: 'HEAD FOO',
    aliases: ['Light', 'Ashbourne', 'Faithful'],
    youtubeUrl: '',
    tiktokUrl: 'https://www.tiktok.com/@nullego',
    image: egoFooImage,
    
  },
 
  {
    slug: 'dwight-foo',
    name: 'Dwight Foo',
    category: 'HEAD FOO',
    aliases: ['Who', 'Richman', 'Swaggero', 'Lovelace'],
    youtubeUrl: '',
    tiktokUrl: 'https://www.tiktok.com/@dwxyt.4fps',
    image: dwightFooImage,
    
  },
  {
    slug: 'senjhu-foo',
    name: 'Senjhu Foo',
    category: 'HEAD FOO',
    aliases: ['Ashbourne'],
    youtubeUrl: 'https://www.youtube.com/@notsenjhu',
    tiktokUrl: 'https://www.tiktok.com/@notsenjhu',
    image: senjhuFooImage,
    
  },
  {
    slug: 'soleil-foo',
    name: 'Soleil Foo',
    category: 'HEAD FOO',
    aliases: ['DRAGON', 'MENDEZ', 'EXODUS', 'NO MERCY', 'AYASE', 'ASHCROFT'],
    youtubeUrl: 'https://youtube.com/@soleil2much?si=9-glwJnJSEkS8g1K',
    tiktokUrl: 'https://www.tiktok.com/@shesolei1_?_r=1&_t=ZS-9BG9XzjmXbh',
    image: soleilFooImage,
  },
  {
    slug: 'amor-foo',
    name: 'Amor Foo',
    category: 'HEAD FOO',
    aliases: ['Deveza'],
    youtubeUrl: '',
    tiktokUrl: 'https://www.tiktok.com/@amornsmsksma',
    image: amorFooImage,
  },

  {
    slug: 'Santi-foo',
    name: 'Santi Foo',
    category: 'HEAD FOO',
    aliases: ['Gil', 'TH$'],
    youtubeUrl: 'https://www.youtube.com/@aintsantiii',
    tiktokUrl: 'https://www.tiktok.com/@santiii_772',
    image: santifooImage,
  },
  {
    slug: 'lazy-foo',
    name: 'Lazy Foo',
    category: 'FOO',
    aliases: ['rockstar', 'morgan'],
    youtubeUrl: 'https://youtube.com/@lazyxclu?si=iC0ZAIvzc82nirWF',
    tiktokUrl: 'https://open.spotify.com/track/4TtFvGGps7haO0XbmhVz2y?si=irBOu1ZwQZCNJSbzbF8xRg&utm_source=copy-link',
    image: lazyfooImage,
  },

  {
    slug: 'Wyo-foo',
    name: 'Wyo Foo',
    category: 'FOO',
    aliases: ['Nomersi', 'Lim', 'Solen'],
    youtubeUrl: 'https://youtube.com/@wxyofoo?si=dX0bnD2tv4daVGDB',
    tiktokUrl: 'https://www.tiktok.com/@4wyo.nmrsi',
    image: wyofooImage,
  },

  {
    slug: 'Ila-foo',
    name: 'Ila Foo',
    category: 'FOO',
    aliases: ['Akane'],
    youtubeUrl: '',
    tiktokUrl: 'https://www.tiktok.com/@skkskila',
    image: ilafooImage,
  },

  {
    slug: 'Sumi-foo',
    name: 'Sumi Foo',
    category: 'FOO',
    aliases: ['BELGICA', 'HERMES', 'GERVASI', 'RICHMAN'],
    youtubeUrl: 'https://www.youtube.com/@sumilavin',
    tiktokUrl: 'https://www.tiktok.com/@sumilavin',
    image: sumiFooImage,
  },

  {
    slug: 'Trusty-foo',
    name: 'Trusty Foo',
    category: 'FOO',
    aliases: ['Hellmerry' , 'Amiri' , 'Exodus' , 'Dragon' , 'Dazed'],
    youtubeUrl: '',
    tiktokUrl: 'https://www.tiktok.com/@swt.ys',
    image: trustyFooImage,
  },
 {
    slug: 'Karma-foo',
    name: 'Karma Foo',
    category: 'FOO',
    aliases: ['Gaspari' , 'Richman' , 'Loco'],
    youtubeUrl: 'https://youtube.com/@karmagaspari?si=hoPq8_wEhkzLpqzy',
    tiktokUrl: 'https://www.tiktok.com/@kaydenlocogaspari?',
    image: karmaFooImage,
  },
  
  {
    slug: 'Kinne-foo',
    name: 'Kinne Foo',
    category: 'FOO',
    aliases: ['MAGASLAW' , 'POLLO ' , 'DXTR'],
    youtubeUrl: '',
    tiktokUrl: 'https://www.tiktok.com/@exclsv4kinne',
    image: kinneFooImage,
  },
  {
    slug: 'daisuke-foo',
    name: 'Daisuke Foo',
    category: 'FOO',
    aliases: ['FuegoSilente' , 'Herrera'],
    youtubeUrl: '',
    tiktokUrl: 'https://www.tiktok.com/@fgstdaisu',
    image: daisukeFooImage,
  },

  
];

const categories = [
  {
    id: 'owner',
    label: 'ABOVE ALL',
    accent: '01',
    members: memberDirectory.filter((member) => member.category === 'OWNER'),
    featured: true,
  },
  {
    id: 'gods',
    label: 'Gods',
    accent: '02',
    members: memberDirectory.filter((member) => member.category === 'GODS'),
  },
  {
    id: 'head-foo',
    label: 'Head Foo',
    accent: '03',
    members: memberDirectory.filter((member) => member.category === 'HEAD FOO'),
  },
  {
    id: 'foo',
    label: 'FOO',
    accent: '04',
    members: memberDirectory.filter((member) => member.category === 'FOO'),
  },
];

const loadingMessages = [
  'INITIALIZING FOO WORLDWIDE...',
  'GATHERING THE MEMBERS...',
  'ESTABLISHING CONNECTION...',
  'WELCOME TO FOO WORLDWIDE.',
];

function formatMemberCount(count) {
  return `${count} ${count === 1 ? 'member' : 'members'}`;
}

function getHashMember(memberLookup) {
  if (typeof window === 'undefined') return null;

  const hash = window.location.hash.replace(/^#/, '');
  if (!hash || hash === '/') return null;

  if (!hash.startsWith('member/')) return null;

  const slug = normalizeMemberSlug(hash.replace('member/', ''));
  return memberLookup[slug] || null;
}

function MemberGroup({ category, offset, onSelect }) {
  return (
    <article className={`member-group ${category.featured ? 'featured' : ''}`} style={{ animationDelay: `${offset}ms` }}>
      <div className="group-header">
        <span className="group-id">{category.accent}</span>
        <h3>{category.label}</h3>
        <span className="count">{formatMemberCount(category.members.length)}</span>
      </div>

      <ul className="member-list">
        {category.members.map((member, index) => (
          <li
            key={member.slug}
            className="member-item"
            onClick={() => onSelect(member)}
            style={{ animationDelay: `${offset + index * 120}ms` }}
            tabIndex={0}
            role="button"
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onSelect(member);
              }
            }}
          >
            <div className="member-card-visual">
              {member.image ? (
                <img src={member.image} alt={member.name} className="member-card-image" />
              ) : (
                <div className="member-card-placeholder" aria-label={`${member.name} placeholder`}>
                  {member.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')
                    .slice(0, 2)}
                </div>
              )}
            </div>
            <span className="member-card-name">{member.name}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.6 7.55a2.95 2.95 0 0 0-2.08-2.1C17.82 5.1 12 5.1 12 5.1s-5.82 0-7.52.35A2.95 2.95 0 0 0 2.4 7.55 31.7 31.7 0 0 0 2 12a31.7 31.7 0 0 0 .4 4.45 2.95 2.95 0 0 0 2.08 2.1c1.7.35 7.52.35 7.52.35s5.82 0 7.52-.35a2.95 2.95 0 0 0 2.08-2.1A31.7 31.7 0 0 0 22 12a31.7 31.7 0 0 0-.4-4.45ZM10 15.5v-7l6 3.5-6 3.5Z" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15.6 3c.45 1.5 1.62 2.62 3.2 3.08v2.62c-1.3.08-2.38-.26-3.42-.82v6.38a5.28 5.28 0 1 1-5.28-5.28c.2 0 .4.02.6.05v2.7a2.68 2.68 0 0 0-.8-.12 2.82 2.82 0 1 0 2.82 2.82V3h2.88Z" fill="currentColor" />
    </svg>
  );
}

function MusicPlayer({ member }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);

  const memberAudioMap = {
    'ban-foo': banAudio,
    'gaddy-foo': gaddyAudio,
    'kuri-foo': kuriAudio,
    'ego-foo': egoAudio,
    'pistol-foo': pistolAudio,
    'lazy-foo': lazyAudio,
    'dwight-foo': dwightAudio,
    'uno-foo': unoAudio,
    'santino-foo': santinoAudio,
    'soleil-foo': soleilAudio,
    'amor-foo': amorAudio,
    'zets-foo': zetsAudio,
    'wyo-foo': wyoAudio,
    'senjhu-foo': senjhuAudio,
    'ila-foo': ilaaudio,
    'sumi-foo': sumiAudio,
    'trusty-foo': trustyAudio,
    'santi-foo': santifooAudio,
    'karma-foo': karmaAudio,
    'kinne-foo': kinneAudio,
    'dos-foo': dosAudio,
    'renzo-foo': renzoAudio,
    'daisuke-foo': daisukeAudio,
  };

  const audioSource = member ? memberAudioMap[normalizeMemberSlug(member.slug)] || '' : '';
  const titleText = member ? member.name.toUpperCase() : 'FOO WORLDWIDE';

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !audioSource) {
      setIsPlaying(false);
      setCurrentTime(0);
      setDuration(0);
      return undefined;
    }

    const handlePlaybackError = () => {
      setIsPlaying(false);
    };

    audio.src = audioSource;
    audio.load();
    audio.volume = volume;
    audio.currentTime = 0;

    const playAttempt = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        setIsPlaying(false);
      }
    };

    audio.addEventListener('error', handlePlaybackError);
    playAttempt();

    return () => {
      audio.pause();
      audio.currentTime = 0;
      audio.removeEventListener('error', handlePlaybackError);
      setIsPlaying(false);
      setCurrentTime(0);
      setDuration(0);
    };
  }, [audioSource]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;
  }, [volume]);

  const handleTogglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio || !audioSource) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        setIsPlaying(false);
      }
      return;
    }

    audio.pause();
    setIsPlaying(false);
  };

  const handleSeek = (event) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;

    const nextTime = Number(event.target.value);
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const handleVolumeChange = (event) => {
    const nextVolume = Number(event.target.value);
    setVolume(nextVolume);

    if (audioRef.current) {
      audioRef.current.volume = nextVolume;
    }
  };

  const formatTime = (value) => {
    if (!Number.isFinite(value) || value <= 0) return '0:00';
    const minutes = Math.floor(value / 60);
    const seconds = Math.floor(value % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  if (!audioSource) {
    return null;
  }

  return (
    <div className="music-player-panel">
      <div className="music-player-shell">
        <div className="mini-audio-player">
          <div className="audio-meta">
            {isPlaying && <div className="audio-track-label">Now playing</div>}
            <div className="audio-track-name">{titleText}</div>
            <div className="audio-artist-name">FOO WORLDWIDE</div>
          </div>

          <div className="audio-controls-row">
            <button type="button" className="audio-toggle" onClick={handleTogglePlayback} aria-label={isPlaying ? 'Pause audio' : 'Play audio'}>
              {isPlaying ? 'Pause' : 'Play'}
            </button>

            <div className="audio-progress-wrap">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="audio-progress"
                aria-label="Audio progress"
              />
              <div className="audio-time-row">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>

          <div className="audio-volume-wrap">
            <label htmlFor={`${member?.slug || 'audio'}-volume`} className="audio-volume-label">Volume</label>
            <input
              id={`${member?.slug || 'audio'}-volume`}
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="audio-volume"
              aria-label="Volume"
            />
          </div>
        </div>

        <audio
          ref={audioRef}
          preload="auto"
          onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
          onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime || 0)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => {
            setIsPlaying(false);
            setCurrentTime(0);
            if (audioRef.current) {
              audioRef.current.currentTime = 0;
            }
          }}
        />
      </div>
    </div>
  );
}

function App() {
  const [phase, setPhase] = useState('intro');
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [view, setView] = useState('home');
  const [activeMember, setActiveMember] = useState(null);

  const memberLookup = useMemo(
    () => Object.fromEntries(memberDirectory.map((member) => [normalizeMemberSlug(member.slug), member])),
    []
  );

  const currentMessage = useMemo(() => loadingMessages[messageIndex], [messageIndex]);

  useEffect(() => {
    const syncRoute = () => {
      const member = getHashMember(memberLookup);
      if (member) {
        setActiveMember(member);
        setView('profile');
      } else {
        setActiveMember(null);
        setView('home');
      }
    };

    syncRoute();
    window.addEventListener('hashchange', syncRoute);

    return () => window.removeEventListener('hashchange', syncRoute);
  }, [memberLookup]);

  const beginLoading = () => {
    setPhase('loading');
    setProgress(0);
    setMessageIndex(0);
  };

  useEffect(() => {
    if (phase !== 'loading') return undefined;

    const interval = window.setInterval(() => {
      setProgress((previous) => {
        const next = previous + 2;
        if (next >= 100) {
          window.clearInterval(interval);
          window.setTimeout(() => setPhase('site'), 420);
          return 100;
        }

        if (next >= 25 && next < 60) {
          setMessageIndex(1);
        } else if (next >= 60 && next < 85) {
          setMessageIndex(2);
        } else if (next >= 85) {
          setMessageIndex(3);
        }

        return next;
      });
    }, 40);

    return () => window.clearInterval(interval);
  }, [phase]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      beginLoading();
    }
  };

  const openMemberProfile = (member) => {
    const nextHash = `#member/${member.slug}`;
    window.history.pushState({}, '', nextHash);
    setActiveMember(member);
    setView('profile');
  };

  const goHome = () => {
    const activeAudio = document.querySelector('audio');
    if (activeAudio) {
      activeAudio.pause();
      activeAudio.currentTime = 0;
    }

    window.history.pushState({}, '', '#');
    setActiveMember(null);
    setView('home');
  };

  const memberBackgroundMap = {
    'ban-foo': banGifBackground,
    'gaddy-foo': gaddyGifBackground,
    'kuri-foo': kuriGifBackground,
    'ego-foo': egoGifBackground,
    'pistol-foo': pistolGifBackground,
    'lazy-foo': lazyGifBackground,
    'dwight-foo': dwightGifBackground,
    'uno-foo': unoGifBackground,
    'santino-foo': santinoGifBackground,
    'soleil-foo': soleilGifBackground,
    'amor-foo': amorGifBackground,
    'zets-foo': zetsgifBackground,
    'senjhu-foo': senjhugifBackground,
    'wyo-foo': wyoGifBackground,
    'ila-foo': ilaGifBackground,
    'sumi-foo': sumiGifBackground,
    'trusty-foo': trustyGifBackground,
    'santi-foo': santifooGifBackground,
    'karma-foo': karmaGifBackground,
    'kinne-foo': kinneGifBackground,
    'dos-foo': dosGifBackground,
    'renzo-foo': renzoGifBackground,
    'daisuke-foo': daisukeGifBackground,
  };

  return (
    <div className="app-shell">
      {phase !== 'site' && (
        <div
          className={`intro-screen ${phase === 'loading' ? 'loading-mode' : ''}`}
          onClick={phase === 'intro' ? beginLoading : undefined}
          onKeyDown={phase === 'intro' ? handleKeyDown : undefined}
          role={phase === 'intro' ? 'button' : undefined}
          tabIndex={phase === 'intro' ? 0 : -1}
          aria-label="Enter FOO WORLDWIDE"
        >
          <div className="noise-layer" aria-hidden="true" />
          <div className="intro-stage">
            <div className="logo-glow" aria-hidden="true" />
            <img className="foo-logo" src={fooLogo} alt="FOO WORLDWIDE logo" />
            <h1 className="intro-wordmark">FOO WORLDWIDE</h1>

            {phase === 'intro' ? (
              <p className="intro-prompt">CLICK ANYWHERE TO ENTER</p>
            ) : (
              <div className="loading-panel" aria-live="polite">
                <div className="loading-progress">{progress}%</div>
                <div className="loading-bar" aria-hidden="true">
                  <span style={{ width: `${progress}%` }} />
                </div>
                <p className="loading-message">{currentMessage}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {view === 'home' && (
        <div className={`site-shell ${phase === 'site' ? 'is-visible' : ''}`}>
          <header className="topbar">
            <div className="brand-lockup" aria-label="FOO WORLDWIDE logo">
              <img src={fooLogo} alt="FOO WORLDWIDE logo" className="brand-logo" />
            </div>
            <nav className="nav" aria-label="Main navigation">
              <a href="#home">Home</a>
              <a href="#members">Members</a>
              <a href="#footer">World</a>
            </nav>
          </header>

          <main>
            <section className="hero" id="home">
              <div className="hero-bg" aria-hidden="true" />
              <div className="hero-inner">
                <div className="hero-logo-wrap">
                  <img className="hero-logo" src={fooLogo} alt="FOO WORLDWIDE logo" />
                </div>
                <p className="kicker">#FOO WORLDWIDE</p>
                <h1 className="hero-title"></h1>
                <h2 className="hero-subtitle"></h2>
                <p className="tagline"></p>
              </div>
            </section>

            <section className="members-section" id="members">
              <div className="section-label-row" aria-label="Members section">
                <span>01</span>
                <span>MEMBERS</span>
              </div>

              <div className="member-groups">
                {categories.map((category, index) => (
                  <MemberGroup key={category.id} category={category} offset={index * 180} onSelect={openMemberProfile} />
                ))}
              </div>
            </section>
          </main>

          <footer className="footer" id="footer">
            <div className="footer-line" />
            <div className="footer-content">
              <div className="footer-brand">
                <img src={fooLogo} alt="FOO WORLDWIDE logo" className="footer-logo" />
              </div>
              <div className="footer-meta-block">
                <p>#FOO WORLDWIDE</p>
                <span>EST. FOO WORLDWIDE</span>
              </div>
            </div>
            
            <div className="footer-meta">© 2026 FOO WORLDWIDE. ALL RIGHTS RESERVED.</div>
          </footer>
        </div>
      )}

      {view === 'profile' && activeMember && (
        <div className={`profile-page-shell ${activeMember.slug === 'ego-foo' ? 'ego-profile-page-shell' : ''} is-visible`}>
          {memberBackgroundMap[normalizeMemberSlug(activeMember.slug)] && (
            <div
              className={`member-animated-background ${activeMember.slug === 'ego-foo' ? 'ego-animated-background' : ''}`}
              style={{ backgroundImage: `url(${memberBackgroundMap[normalizeMemberSlug(activeMember.slug)]})` }}
              aria-hidden="true"
            />
          )}

          {memberBackgroundMap[normalizeMemberSlug(activeMember.slug)] && <div className="member-overlay" aria-hidden="true" />}

          <header className="profile-header">
            <button type="button" className="back-button" onClick={goHome}>
              <span aria-hidden="true">←</span>
              <span>BACK TO MEMBERS</span>
            </button>
            <div className="profile-brand-mini" aria-label="FOO WORLDWIDE logo">
              <img src={fooLogo} alt="FOO WORLDWIDE logo" className="brand-logo" />
            </div>
          </header>

          <main className="profile-main">
            <section className={`profile-card ${activeMember.slug === 'ego-foo' ? 'ego-profile-card' : ''}`}>
              <div className="profile-visual">
                {activeMember.image ? (
                  <img src={activeMember.image} alt={activeMember.name} className="profile-image" />
                ) : (
                  <div className="profile-placeholder" aria-label={`${activeMember.name} profile image placeholder`}>
                    {activeMember.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                )}
              </div>

              <div className="profile-content">
                <p className="profile-category">{activeMember.category}</p>
                <h1>{activeMember.name}</h1>

                <div className="repping-block">
                  <span className="repping-label">Repping</span>
                  <div className="alias-list">
                    {activeMember.aliases.map((alias) => (
                      <span key={alias} className="alias-tag">{alias}</span>
                    ))}
                  </div>
                </div>

                <p className="profile-bio">{activeMember.bio}</p>

                <div className="socials-block">
                  <span className="socials-label">Socials</span>
                  <div className="social-links">
                    {[
                      {
                        label: 'YouTube',
                        href: activeMember.youtubeUrl?.trim(),
                        icon: <YouTubeIcon />,
                        key: 'youtube',
                      },
                      {
                        label: 'TikTok',
                        href: activeMember.tiktokUrl?.trim(),
                        icon: <TikTokIcon />,
                        key: 'tiktok',
                      },
                    ].map((platform) => {
                      const isDisabled = !platform.href;

                      if (isDisabled) {
                        return (
                          <div
                            key={platform.key}
                            className="social-item disabled"
                            aria-label={`${platform.label} unavailable`}
                            title={`${platform.label} unavailable`}
                          >
                            <span className="social-link disabled">
                              {platform.icon}
                            </span>
                            <span className="social-name">{platform.label}</span>
                          </div>
                        );
                      }

                      return (
                        <a
                          key={platform.key}
                          href={platform.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="social-item"
                          aria-label={`Visit ${activeMember.name} on ${platform.label}`}
                        >
                          <span className="social-link">
                            {platform.icon}
                          </span>
                          <span className="social-name">{platform.label}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>

                <MusicPlayer member={activeMember} />
              </div>
            </section>
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
