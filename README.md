# Puff 공식 다운로드 홈페이지

DayPixel이 만드는 작은 작업 친구, Puff의 공식 홈페이지와 배포 파일을 제공합니다.

- 홈페이지: https://daypixel.kr/puff/
- 다운로드: https://github.com/DayPixel/puff/releases
- 문의: eunhafactory@daypixel.kr

이 저장소에는 공개 홈페이지 소스와 소개 영상만 들어 있습니다. 앱 소스, 인증 정보, 서버 키는 포함하지 않습니다. 정적 HTML/CSS로 구성되어 있고 GitHub Pages에서 main 브랜치의 루트를 게시합니다.

## v0.2.0 공개 베타

다운로드 파일은 실제 서버 설정이 포함된 앱입니다. 데모 전용 빌드가 아닙니다.

- Mac: Apple Silicon / macOS 14 이상. 임시 서명 상태이며 Apple 공증 전입니다.
- Windows: Windows 10 22H2 / Windows 11 x64 대상. 코드 서명과 실제 Windows 기기 검증 전입니다.

Windows 핵심 동작 73개 검사, 실서버 인증·private 채널 접근 7개 검사 및 Windows x64 교차 빌드를 확인했습니다. Mac과 Windows 사이에서 실제 기기로 함께 사용하는 검증은 남아 있습니다.

현재 Windows에는 자동 작업 감지, 작업 통계·기지개 알림, 일부 움직임 효과가 없습니다. 설치 방법과 버전별 제한은 홈페이지와 Release 안내를 확인해 주세요.

## 로컬 미리보기

```sh
python3 -m http.server 4173
```

브라우저에서 `http://localhost:4173`을 열면 됩니다. PC·모바일 레이아웃, 키보드 탐색, 영상 재생, 다운로드 링크를 확인한 뒤 게시합니다.

소개 영상은 Mac 앱의 캐릭터·움직임을 사용한 연출 영상이며 실제 접속 인원을 보여주지 않습니다. 자동 재생하지 않고, 영상 내용을 텍스트로도 제공합니다.
