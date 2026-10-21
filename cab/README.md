# PTS 운전실 재구성 (새 앱, `cab/` 폴더)

실물 PTS 운전실을 3D로 재구성하고 준비점검 연습·회로 시뮬레이션·차량 3D·역행 계산을 넣은 별도 웹앱입니다.

- 주소: https://chosunengineering.github.io/vvvf-pts-simulator/cab/
- 설치: 위 주소를 Chrome으로 열고 ⋮ → 앱 설치(또는 홈 화면에 추가). 아이폰은 Safari → 공유 → 홈 화면에 추가.
- 첫 접속 후 오프라인에서도 열립니다. 목소리 파일은 처음 열 때 뒤에서 받아 둡니다.
- 주요 기능
  - 3D 운전실: 기기를 눌러 조작, 휴대폰은 아래 조작 시트로 핸들 단 선택
  - 준비점검 연습: 자동 시연 · 직접 조작 · 말하기 암기, 리모컨, 점검 타이머, 정답 음성 7종
  - 회로: 103선·운전실 선택·Pan·MCB 시퀀스·비상 Loop·11선·고장 넣기(ACOCR·CIFR·SIV 등)와 RS·VCOS·VRS·ESPS 조치
  - 차량 3D: TC·M·M′ 기기·주회로 전기 흐름·인통선·공기관을 운전 조작대로 실시간 구동, 역행 견인력·주행저항 계산
- 음성 출처: 타입캐스트 AI 음성(창배·덕춘·서윤·창수, https://typecast.ai — 무료 플랜, 개인·비상업 용도), Microsoft Azure 신경망 음성(봉진·서현·순복)
- 공개 라이브러리: three.js (MIT), 글꼴 Noto Sans KR · JetBrains Mono (SIL OFL)

저작권 및 허용 범위는 상위 폴더의 [LICENSE](../LICENSE)를 따릅니다.
