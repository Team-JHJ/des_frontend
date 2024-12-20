# Node.js 베이스 이미지 사용
FROM node:21-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 패키지 파일 복사 및 의존성 설치
COPY package*.json ./
RUN npm install

# 모든 소스 코드 복사
COPY . .

# 환경 변수 전달 및 .env 파일 생성 (필요한 경우)
ARG ENV
RUN echo "$ENV" > .env

# React 애플리케이션 빌드 (Vite 사용)
RUN npm run build

# `serve` 패키지 글로벌 설치
RUN npm install -g serve

# 컨테이너가 사용할 포트 번호
EXPOSE 3000

# 정적 파일 서빙 (dist 디렉토리 사용)
CMD ["serve", "-s", "dist", "-l", "3000"]
