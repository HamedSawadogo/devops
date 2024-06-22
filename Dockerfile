FROM python:3
#command
#COPY ADD WORKDIR RUN CMD EXPOSE

COPY main.py /app/
COPY . /app/

WORKDIR /app

RUN  pip install poetry

VOLUME /app/logs

CMD [ "python3","./main.py"]