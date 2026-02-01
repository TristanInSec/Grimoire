/**
 * Prism.js Custom Extensions
 * ==========================
 * 
 * Custom syntax highlighting extensions for domain-specific tools and commands.
 * This file can be customized or replaced for different documentation domains.
 * 
 * Current configuration: Cybersecurity/Penetration Testing tools
 * 
 * To customize for a different domain:
 * 1. Replace the keyword lists with your domain-specific tools
 * 2. Or delete this file entirely (Prism works without it)
 * 
 * Example domains you might customize for:
 * - DevOps: docker, kubectl, terraform, ansible, etc.
 * - Data Science: pandas, numpy, sklearn, jupyter, etc.
 * - Web Development: npm, webpack, react, vue, etc.
 */

(function() {
    'use strict';

    // Wait for Prism to be available
    if (typeof Prism === 'undefined') {
        console.warn('Prism not loaded - custom extensions skipped');
        return;
    }

    // Extend bash grammar with security tool keywords
    Prism.hooks.add('complete', function(env) {
        if (env.language === 'bash' || env.language === 'shell' || env.language === 'sh') {
            
            // Metasploit console commands
            const msfKeywords = /\b(use|exploit|run|set|unset|setg|show|search|info|options|sessions|background|back|exit|help|load|unload|resource|db_nmap|db_import|hosts|services|vulns|creds|loot|workspace|analyze|arp_scanner|auxiliary|banner|check|connect|cve|edit|features|get|getg|go_pro|grep|irb|jobs|kill|loadpath|makerc|payloads|plugins|popm|previous|pushm|quit|reload_all|rename|route|save|sleep|spool|threads|tips|version)\b/g;
            
            // Common security/penetration testing tools
            const secTools = /\b(nmap|nikto|dirb|gobuster|ffuf|feroxbuster|sqlmap|burpsuite|wireshark|hydra|john|hashcat|metasploit|msfconsole|msfvenom|netcat|nc|ncat|socat|curl|wget|ssh|scp|ftp|telnet|enum4linux|smbclient|smbmap|crackmapexec|evil-winrm|impacket|bloodhound|mimikatz|rubeus|certify|powerview|sharphound|responder|bettercap|ettercap|aircrack-ng|wifite|reaver|hashid|hash-identifier|searchsploit|exploitdb|nuclei|subfinder|amass|theHarvester|recon-ng|maltego|shodan|censys|dnsenum|dnsrecon|fierce|whois|dig|host|nslookup|traceroute|tcpdump|tshark|masscan|rustscan|zmap|whatweb|wpscan|joomscan|droopescan|cewl|crunch|medusa|patator|wfuzz|arjun|paramspider|gau|waybackurls|httprobe|aquatone|eyewitness|gowitness|dirsearch|linkfinder|secretfinder|gf|qsreplace|unfurl|anew|httpx|dnsx|shuffledns|puredns|massdns|altdns|dnsgen|gotator|sublist3r|assetfinder|findomain|github-subdomains|gitlab-subdomains|crt\.sh|certspotter)\b/g;
            
            // Network and system commands commonly used in security
            const sysCommands = /\b(ifconfig|ip|iptables|netstat|ss|lsof|ps|top|htop|kill|pkill|systemctl|service|journalctl|dmesg|uname|whoami|id|groups|passwd|sudo|su|chmod|chown|chgrp|find|locate|grep|egrep|awk|sed|cut|sort|uniq|wc|head|tail|cat|less|more|vim|nano|tar|gzip|gunzip|zip|unzip|base64|xxd|hexdump|strings|file|binwalk|foremost|volatility|autopsy|sleuthkit|yara|clamav|rkhunter|chkrootkit|lynis|openvas|nessus|nikto|arachni|zap|w3af|skipfish|wapiti|vega|acunetix|appscan|fortify|checkmarx|sonarqube|bandit|safety|pip-audit|npm-audit|snyk|trivy|grype|syft|cosign|sigstore)\b/g;

            env.element.innerHTML = env.element.innerHTML
                .replace(msfKeywords, '<span class="token keyword">$1</span>')
                .replace(secTools, '<span class="token function">$1</span>')
                .replace(sysCommands, '<span class="token builtin">$1</span>');
        }
    });

})();
