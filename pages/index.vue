<script lang="ts" setup>
const yearNow = new Date().getFullYear();
const age = yearNow - 2003;
const experience = yearNow - 2018;
</script>

<template>
    <Container>
        <NuxtImg
            src="/profile.webp"
            class="md:float-end w-[175px] mb-8 md:ml-4 md:mb-4"
        />
        <div class="grid gap-4">
            <Section>
                <h1 class="text-2xl mb-2">Heaven Aldrico</h1>
                <p>
                    I'm passionate about technologies, video games, musics,
                    movies, and experimenting in something new.
                </p>
                <p>
                    I code professionally and work on some side projects in my
                    spare time.
                </p>
            </Section>
            <Section>
                <SectionTitle>About me</SectionTitle>
                <DottedUl>
                    <li>{{ age }}</li>
                    <li>
                        {{ experience }} years of software development
                        experience
                    </li>
                    <li>Undergraduate at UPN Veteran Jawa Timur</li>
                </DottedUl>
            </Section>
            <Section>
                <SectionTitle>Socials</SectionTitle>
                <DottedUl>
                    <li>
                        <a href="https://github.com/ldriko" target="_blank">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/heaven-aldrico"
                            target="_blank"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/ldriko" target="_blank">
                            Twitter
                        </a>
                    </li>
                </DottedUl>
            </Section>
            <Section>
                <SectionTitle>Experience</SectionTitle>
                <DottedUl>
                    <li>
                        Algorithms (<a
                            href="https://github.com/ldriko/algorithms"
                            target="_blank"
                            >GitHub</a
                        >)
                    </li>
                    <li>
                        Conway's Game of Life (<a
                            href="https://github.com/ldriko/conway-game-of-life"
                            target="_blank"
                            >GitHub</a
                        >)
                    </li>
                </DottedUl>
            </Section>
            <Section>
                <SectionTitle>Bookmarks</SectionTitle>
                <DottedUl>
                    <li>
                        An argument for logging off (<a
                            href="https://aaronfrancis.com/2024/an-argument-for-logging-off-9a4de45b"
                            target="_blank"
                            >Article</a
                        >) &starf;
                    </li>
                </DottedUl>
            </Section>
        </div>
    </Container>
</template>
