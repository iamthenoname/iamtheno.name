---
title: 'What Does It Mean to Be Human?'
author: 'iamthenoname'
date: 2024-07-09T22:06:48+08:00
draft: true
summary: 'A long ramble about my childhood, technology, and artificial intelligence'
description: 'A long ramble about my childhood, technology, and artificial intelligence'
tags: [ "artificial intelligence", "technology" ]
images: [ "./posts/images/what-does-it-mean-to-be-human/1.png" ]
---

![A magazine clipping of a quote from a woman named Joanna Maciejewska. It reads: "I want AI to do my laundry and dishes so that I can do art and writing, not for AI to do my art and writing so that I can do my laundry and dishes." A note below reads: "Author and videogame enthusiast Joanna Maciejewska nails it (although bathroom cleaning goes ahead of laundry and dishes)."](./1.png)

> Seeing everything in its duality, we begin to get some dim clues to direction and what it’s all about. It is in these contradictions and their incessant interacting tensions that creativity begins.
> 
> --- Saul Alinsky, *Rules for Radicals*

I've had a pretty weird history with technology. It wasn't until I was 13 that I had a proper Facebook account--- I only had a flip phone before that. My old computer only had an Intel CPU with integrated graphics that supported a minimum OpenGL version of **2.1**.

Yet, somehow, I fell in love with computers.

The first time I explored programming was with a book that I randomly saw in a bookstore. It was a CoderDojo book that taught you how to make a website. I was incredibly intrigued. I asked my mom if it was okay if I got the book for Christmas, and she obliged.

This was at a time when Google Chrome still had sharp-edged tabs and Windows 10 wasn't really a thing yet. The laptop that I had was a Thinkpad T61, and I think it's probably older than me. My family didn't have proper access to the internet at the time, and we had to use this weird USB Wi-Fi thing that you can insert a SIM card into.

But that wasn't going to stop me. Excitedly, I typed in the HTML code I saw in the book into Notepad. I opened the HTML file in Chrome, and... vòila. Black text on a white background. Yeah, I know.

I was **amazed**. I didn't know you could do that! So this is how people make websites? I want to know more!!!

Funnily enough, I also ran into the first of many dumbfounded coding moments. I was in the section where images were introduced, but for some reason, the images wouldn't load! I spent a whole hour trying to figure out why the pictures were just the same paper-looking icon with colored shapes inside.

The problem was that I didn't have the image files in the directory. Hell, I didn't even download them. I have no idea what young me was thinking.

Regardless, I pushed on. I managed to reach the last chapter, where it taught you how to upload your website to the web with a server and domain name using FTP (who even uses FTP anymore?). I had to stop after that because I didn't really have enough money. Honestly, I was a bit disappointed.

But even after that, the itch never went away.

Fast-forward to a few months later. I usually stayed at my grandmother's office. To pass the time, I usually just read books or draw random things. She probably noticed how bored I was, so she decided to let me borrow one of the small netbooks in the office.

It had Linux Mint on it.

This was the start of a long and still-ongoing spiral. Downward or upward? Not really sure.

At first, I tried running an exe file. It didn't work at all! I spent the whole afternoon researching it, only to realize the sad truth: You can't really run Windows programs on Linux. You could, but my poor little brain was bombarded with information I couldn't understand.

I explored a little after that. A bit of C++ here, a bit of Javascript there, and some Linux configuration over there.

After a while, I stopped going to that office. My original laptop stopped working for some reason, so I had to take a break.

A few years later, during the pandemic, I decided to try Linux again on the computer that I mentioned before.

Through this exploration of Linux, I developed a taste for minimalism. Only having 4 GB of RAM and an old CPU was manageable, but I had to get creative with some things. I started looking into the [suckless](http://suckless.org/philosophy/) movement. I transitioned to using the terminal. I hated modern languages like Rust and Python because of how slowly they compiled or ran on my system. I hated software now for how much they disregarded technology that still had potential to be used.

I loved low-end. I loved suckless. I loved minimalism. It just spoke to me. It was so much fun exploring the limits of what I could do with my system with the limited resources that I had.

However, after a while of exploration, I came to develop this pessimistic view of software. I went from Linux distros like Pop!OS, Arch Linux, Artix, Gentoo, and even Linux from Scratch. The lower I went, the more I realized how much of a pain it all was. It wasn't fun figuring out what went wrong in compilation after waiting for the entire half of the day doing literally everything else but using my computer.

Even Alpine Linux (which I still personally love to this day) felt inadequate when I had to do anything slightly complicated, like play games or install things that weren't available on the official package repositories. I started to hate suckless and how it was such a pain to learn configuration. I felt like I was spending hours learning how to configure this one part of my system just to get some nice little feature that will probably not be helpful in the long term anyway. After being an avid fan of the terminal because of its "simplicity," I realized how complicated it really was with how many terminal emulators you could use and what shell to use and the plugins that can be installed in them and the weird syntax of writing shellscript and keybindings and multiplexing and modern replacements to coreutils and suckless replacements to coreutils and oh god please please stop

New software felt bloated. Suckless felt outdated.

No matter how hard I tried, I felt like there was something fundamentally wrong with the way these systems were.

So I took a break. I was never switching back to Windows, but I didn't do any fancy configuration anymore. Just river, foot, vis, and firefox. Not perfect--- and super boring--- but it was enough for the time being.

After a while, I experimented a little with other systems such as [Plan 9](https://p9f.org/about.html) and [OpenBSD](https://www.openbsd.org/). Something felt right about them, but I knew there were some pretty big flaws in these systems too. I decided to put them on the backburner until I'm more hardened from ~~trauma~~ experience.

But what really spoke to me was this small niche project called [uxn](https://100r.co/site/uxn.html). After looking into it for a bit, I was intrigued.

Admittedly, I am not a great programmer. I had a really hard time understanding uxn. To this day, I'm still not quite confident about writing anything in uxntal. It's incredibly archaic, the documentation was written for people who probably didn't need it anyway (I'm kidding), and it has so many concepts that feel so alien to me that I simply can't grasp them quite well.

Regardless, I am *in love* with uxn. For the things that I *do* understand, they just make so much sense. The simplicity of this system captivated me yet again. What *can* you do with such a limited system? How do you make text editors, music software, and games in this system?

uxn just screamed... joyfulness. Exploration. *Humanity*. Programming for the sake of programming, not for the sake of complying with a set of old standards that everyone just follows to maintain backward compatibility.

After that, a friend introduced me to this Youtuber named Ben Eater. I was fascinated with the low-level concepts that were so completely different from the ideas that I was used to. I never fully got into hardware (I'm broke), but I still rewatch his videos from time to time.

I came to realize that I loved these niche ideas not just because of how they solved problems but also because of how they explained *why* these alternative solutions could work. I loved suckless because it tried to recontextualize the software industry and look back at methods and ideas that were buried in the sands of time. I love uxn because it tried to solve the problem of computability with constrained resources in a very memorable and different way. I love Ben Eater's videos because they introduce programming problems in a new light: how would a bunch of 1's and 0's even do something?

I started to hate suckless because it tried to apply old methods to *everything*. I felt like the movement was too obsessed with analyzing *how* people did things in the past. Of course, if people did it in the past, it should still work now! Everything that didn't conform to their ideology was deemed ["harmful" or "evil"](http://suckless.org/sucks/). It felt incredibly toxic--- it didn't help that I was already grinding my teeth, attempting to patch dwm and st addons and managing conflicting merges. `patch -p1`...

It felt more productive (and much more enjoyable) to look at both the old and the new and see how people have come up with their own solutions to problems.

If you're still here, thank you for reading the whole way through. I promise I'm about to explain why I went on that massive ramble.

The reason why I came to hate mainstream technology and software is because of how bland they were; they were bloated and massive because of laziness and corporate greed. It was exacerbated by how I could hardly run their software on my old, outdated hardware, which should still work to this day by all means. In fact, it does! I was disgusted by the constant need for progress and faster hardware. It felt... corporate. *Inhuman*.

But the reason I didn't like projects like suckless was because of how bitter they were. It seemed as if all they wanted was to defiantly act against the status quo and to reject all the ideas that others had made throughout the years. After all, ever since the corporations got their grubby hands on open-source, we can't trust the rest to be safe. We need to go back to our roots and remember what *true* software was. This... didn't feel right to me at all. The longer I stayed, the less I felt like I wanted to be a part of it.

I would like to emphasize again that I am not a great programmer. All of the people I've talked about have created amazing projects that have influenced me and hundreds of other people in the world. I could not possibly recreate the things that they have made in a few programming sessions.

But I *love* code. I love spending days and nights understanding the deep intricacies of systems and objects and nodes and messages and utilities and keybindings and configuration files, and all sorts of other things that have taken up the majority of my teenage life. Looking at these things now always makes me think: "Could this possibly be done any better?" Undoubtedly, making the **tools** that we use better can help more people create and innovate.

Which leads me into artificial intelligence (the topic you probably thought this post would be about, judging from the picture).

Personally, I am not a fan of AI--- but not in the way I usually see it online. I don't like it because of the intense resource usage commonly associated with it. With my background in computing, it didn't resonate with me. Getting a huge chunk of data, mushing it together, and solving problems with the result you got felt incredibly... inelegant to me.

However, I'd argue that AI *can* be beneficial and helpful to many people. A good example is waste management. AI can be applied to waste collection, where optimized routes are made to maximize garbage collection, minimize distance between collection and sorting centers, and avoid traffic. Hypothetically, after using AI for a year or two, the routes generated can be interpreted and analyzed in order to create a replacement algorithm for the AI. This is what I see AI being good for: a **tool** for analyzing solutions to problems that may be too hard for people to come up with on their own.

However, the most outcry I've seen related to AI is with art, whether it's text or images. On social media, I often find people arguing that using art made by people to generate media autonomously is unethical. AI has brought into question the concepts of legitimacy and authenticity. At this point, what even is art?

To make money as an artist, you will often need to create art that other people will enjoy. If your art does not have exposure, you will simply not make it as an artist. Regardless of your skill, your talent, or your experience, your work is essentially useless without the knowledge of the public.

Unfortunately, the public typically does not care about you. Not because they're being mean (sometimes), but probably because they're already busy enough with their lives, they're already supporting other artists, or they're just not interested. We don't have an infinite amount of time, money, or interest.

So we arrive at the following conclusion: art is a human thing, and the worth of art is determined by humans.

If art is a human thing, would it be ethical for AI to replicate it?

What does it mean to be "human"? I think we can safely assume that, in this context, to be human means to be grounded in one's roots. To remember where we came from and to value our culture and heritage. To value the way people do things.

But I don't exactly see how not wanting to do basic essential chores is human, let alone wanting machines to do it for you instead. When you put it like that, isn't that kind of dystopian?

Actually, yes--- it *is* human. It's human to be lazy. It's human to not bother looking for niche artists that could really use your help. Actually, it's also human for someone to feel good about finding niche artists when they probably relied on some recommendation algorithm or a list that somebody else made online and to think that they're some kind of indie savior. I'm not saying anything bad about these people. In a way, I'm also like that.

Here is the basis of my argument: to be human is to have the desire to hold on to our past. To remember who we were. 

But it is also the desire to move towards the future. To move past who we were. It is not one or the other. *They are inherently tied together.*

I understand the combined hatred of many artists against AI. I understand the need to speak up and defend what is right. But to what extent will we shout and scream for what is right--- for what is *human*--- when we cannot let go of our own bias and beliefs? When our definition of "humanity" itself is one-sided? This is a problem on both sides--- sides that never should've existed in the first place.

AI is not evil. AI *is* a product of our humanity. Thousands of people around the world have worked for years to understand something that could potentially be helpful. AI wasn't made for the sole purpose of stealing artists' jobs.

Okay, I realize it's kind of a dick move to say that when I don't even need to worry about my job. But the point I'm making here is that this blind hatred of AI is unproductive and even destructive. This problem goes beyond just AI; this is a problem that goes deep into consumerism, trend-following, and the trap of intellectual property. Artists have been mistreated way before AI was ever a thing. It's only become apparent now because of it. 

Wait a minute... "has only been apparent now because of AI"... "a **tool** for analyzing solutions to problems that may be too hard for people to come up with on their own"...

Anyway, the reason I made this rant is because there are seemingly two sides to the AI coin: either you think it's amazing or you think it's absolute garbage. However, the amount of circle-jerking, snarky comments, screenshots of people on Twitter saying something dumb to present the other side as idiots, and memes representing that person's side as "the good guys" makes me incredibly frustrated. I know that there are a lot more level-headed people out there, and the people who are loudest on the internet are usually the angriest, but I just wanted to get this off my head. It's something that I've wanted to write about for a long time now.

But... I suppose that's just what makes us human.
