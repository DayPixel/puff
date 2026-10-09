# 포프(Poff) 공식 다운로드 홈페이지

DayPixel이 만드는 작은 작업 친구, 포프(Poff)의 공식 홈페이지와 배포 파일을 제공합니다.

- 홈페이지: https://daypixel.kr/poff/
- 다운로드: https://github.com/DayPixel/puff/releases
- 문의: eunhafactory@daypixel.kr

공식 홈페이지는 DayPixel/daypixel.github.io 저장소의 `poff/`에 게시합니다. `index.html`, `styles.css`, `app.js`, `sitemap.xml`과 현재 페이지가 사용하는 `assets/` 파일을 복사합니다. 앱 소스, 인증 정보, 서버 키는 공개하지 않습니다.

DayPixel/puff 저장소는 기존 다운로드·업데이트 경로를 유지합니다. 해당 저장소의 `index.html`에는 `legacy-puff/index.html`을 게시하여 새 홈페이지로 연결합니다. 기존 `appcast.xml`과 Google 소유권 확인 파일은 그대로 보존합니다. 기존 사이트맵은 `/puff/`의 이동을 검색엔진이 발견할 수 있도록 유지하고, 새 사이트맵은 회사 사이트와 `/poff/`에 게시합니다.

## v0.2.2 공개 베타

앱과 캐릭터 이름을 포프로 통일했습니다. 기존 프로필·방·초대 링크와 업데이트 주소는 그대로 유지합니다.

다운로드 파일은 실제 서버 설정이 포함된 앱입니다. 데모 전용 빌드가 아닙니다.

- Mac: Apple Silicon / macOS 14 이상. DayPixel Developer ID 서명과 앱·DMG의 Apple 공증을 완료했습니다. DMG 내부 앱의 서명·공증 티켓과 Gatekeeper 통과를 확인했습니다.
- Windows: Windows 10 22H2 / Windows 11 x64 대상. 코드 서명과 실제 Windows 기기 검증 전입니다.

Windows 핵심·움직임·업데이트 79개 검사, 실서버 인증·private 채널 접근 7개 검사 및 Windows x64 교차 빌드를 확인했습니다. Mac과 Windows 사이에서 실제 기기로 함께 사용하는 검증은 남아 있습니다.

Mac 배포본의 데모 메뉴를 제거했습니다. Windows 꾸미기는 큰 미리보기와 부위별 선택 탭으로 바뀌었으며, EXE를 실행해 현재 사용자 계정에 설치합니다. 기존 프로필·방·로그인 정보는 유지합니다.

Mac은 Sparkle, Windows 설치형은 Velopack으로 새 버전을 확인하고 사용자가 설치를 선택하면 적용합니다. 기존 0.2.0 사용자는 이번 버전을 한 번 직접 설치해야 합니다. Windows 0.2.1 사용자는 앱의 업데이트 확인 메뉴를 이용할 수 있습니다. Mac 0.2.2는 DMG로 직접 설치해야 하며, 이번 버전의 자동 업데이트 피드 반영은 아직 완료되지 않았습니다. Windows 보조 ZIP에는 설치형 업데이트가 적용되지 않습니다. Mac 업데이트 피드 `appcast.xml`은 서명된 파일이므로 수작업으로 수정하지 않습니다.

현재 Windows에는 자동 작업 감지, 작업 통계·기지개 알림, 일부 움직임 효과가 없습니다. 설치 방법과 버전별 제한은 홈페이지와 Release 안내를 확인해 주세요.

## 로컬 미리보기

```sh
python3 -m http.server 4173
```

브라우저에서 `http://localhost:4173`을 열면 됩니다. PC·모바일 레이아웃, 키보드 탐색, 영상 재생, 다운로드 링크를 확인한 뒤 게시합니다.

소개 영상은 Mac 앱의 캐릭터·움직임을 사용한 연출 영상이며 실제 접속 인원을 보여주지 않습니다. 39초 전체 소개 영상의 가벼운 720p·30fps 사본을 화면 안에서 음소거 자동 반복 재생합니다. 영상이나 ‘소리 켜고 보기’를 누르면 음악과 효과음이 포함된 1080p·60fps 원본이 크게 열립니다. 영상 내용을 텍스트로도 제공합니다.

상단의 움직임 버튼으로 캐릭터와 미리보기를 정지할 수 있습니다. 기기의 동작 줄이기 설정에서는 자동 움직임을 끄고, 미리보기가 화면 밖에 있거나 탭을 떠나면 재생을 멈춥니다. JavaScript가 없어도 다운로드 링크·설치 안내·전체 영상 링크를 사용할 수 있습니다.

SUITE 글꼴을 자체 호스팅합니다. 출처: https://github.com/sun-typeface/SUITE · 라이선스: `assets/SUITE-LICENSE.txt`.
