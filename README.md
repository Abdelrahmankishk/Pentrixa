# Pentrixa

### Graduation Project – Faculty of Computers and Data Science, Cybersecurity Department, Alexandria University  

---

## 📌 Project Description  

This project presents an automated web security testing platform designed to support **black-box penetration testing**. The system integrates multiple reconnaissance and enumeration tools into a unified workflow to provide comprehensive **attack surface discovery**.  

The platform focuses on automating the most time-consuming phases of penetration testing—**reconnaissance and enumeration**—to reduce manual effort, improve efficiency, and minimize the risk of missing critical assets.  

By consolidating fragmented tools into a single system, the project enhances productivity for **bug bounty hunters, penetration testers, and security researchers**, making security assessments more structured and scalable.  

---

## 🛠️ Technologies & Environment  

The system is built using a modern and scalable technology stack to ensure performance, flexibility, and maintainability:

- **Operating System:** Linux  
- **Frontend:** React  
- **Backend:** RESTful API (Go & Python)  
- **Database:** PostgreSQL  

This stack enables efficient processing of security tasks, seamless integration between system components, and a responsive user interface for managing and analyzing results.

---

## ▶️ How to Run the Project  

1. Open a terminal in the project folder  
2. Run the following command:  

```bash
docker-compose up --build
```  

3. After the system starts, open your browser and go to:  

```
http://localhost
```  

---

## ⚠️ Important Input Format  

When entering a target, you must use the following format:  

```
*.domain.com
```  

✅ Example:  

```
*.yahoo.com
```  

---

## ⚙️ System Workflow  

The system follows a multi-stage automated workflow:  

1. **Initial Reconnaissance**  
   Performs deep asset discovery using OSINT and enumeration techniques.  

2. **Subdomain Collection**  
   Gathers subdomains from multiple external sources and databases.  

3. **Validation & Filtering (Round 1)**  
   Removes duplicates and identifies live web servers.  

4. **Brute-Force Discovery**  
   Expands the attack surface using DNS brute-forcing with generated wordlists.  

5. **Validation & Filtering (Round 2)**  
   Processes newly discovered assets and verifies availability.  

6. **Deep Crawling & Analysis**  
   Extracts hidden endpoints and analyzes JavaScript-based resources.  

7. **Final Validation (Round 3)**  
   Ensures all discovered assets are valid and active.  

8. **Target Prioritization (ROI Analysis)**  
   Identifies high-value targets based on metadata, behavior, and structure.  

---

## 🧰 Integrated Tools  

The platform integrates a set of powerful open-source security tools:  

- **Amass**  
- **Subfinder**  
- **Sublist3r**  
- **Assetfinder**  
- **GAU**  
- **CTL**  
- **Httpx**  
- **CeWL**  
- **ShuffleDNS**  
- **GoSpider**  
- **Subdomainizer**  
- **Katana**  
- **FFuf**  

These tools are orchestrated within a unified pipeline to automate reconnaissance and enumeration efficiently.  

---

## 🎯 Key Features  

- Automated reconnaissance and enumeration workflow  
- Multi-tool orchestration and integration  
- Attack surface aggregation and normalization  
- Live host detection and validation  
- Reduction of duplicate and redundant results  
- Structured and scalable testing process  

---

## 👥 Target Users  

- Bug bounty hunters  
- Penetration testers  
- Organizations testing their own applications  
- Security researchers  

---

## 🔮 Future Work  

- Integration of automated vulnerability scanning  
- Enhanced result visualization and dashboards  

---

## 🎓 Academic Context  

This project is developed as a **Graduation Project** at:  
**Faculty of Computers and Data Science, Cybersecurity Department – Alexandria University, Egypt**  

---

## ⚠️ Disclaimer  

This tool is intended for **educational and authorized security testing purposes only**.  
Users must ensure they have proper permission before testing any target systems.  
