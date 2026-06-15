'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { createPortal } from 'react-dom';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { SERVICES, NAV_LINKS, DETAILED_SERVICES } from '@/lib/constants';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronRight, MessageCircle } from 'lucide-react';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);
    const [activeServiceId, setActiveServiceId] = React.useState(DETAILED_SERVICES[0].id);

    const activeService = DETAILED_SERVICES.find(s => s.id === activeServiceId) || DETAILED_SERVICES[0];

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn('fixed top-0 z-50 w-full border-b border-transparent transition-all duration-300', {
				'bg-background/80 border-slate-200 backdrop-blur-md py-0 shadow-sm': scrolled,
                'bg-transparent py-2': !scrolled,
			})}
		>
			<nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
				<div className="flex items-center gap-10">
					<a href="/" className="text-2xl font-display font-bold tracking-tighter whitespace-nowrap">
                        <span className="text-primary">D</span>
                        <span className="text-textPrimary">slash</span>
                    </a>
					<NavigationMenu className="hidden md:flex">
						<NavigationMenuList className="gap-1">
							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent font-medium text-textMuted hover:text-primary transition-colors">
                                    Services
                                </NavigationMenuTrigger>
								<NavigationMenuContent className="bg-background">
									<div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex w-[900px] min-h-[500px]">
                                        {/* Dropdown Sidebar */}
                                        <div className="w-[300px] bg-slate-50/50 border-r border-slate-100 p-6 flex flex-col gap-2">
                                            {DETAILED_SERVICES.map((service) => (
                                                <button
                                                    key={service.id}
                                                    onMouseEnter={() => setActiveServiceId(service.id)}
                                                    className={cn(
                                                        "flex items-center gap-3 w-full text-left p-3 rounded-xl transition-all duration-300 group relative",
                                                        activeServiceId === service.id 
                                                            ? "bg-white shadow-lg shadow-primary/5 text-primary border border-slate-100" 
                                                            : "text-textMuted hover:bg-white/50 hover:text-textPrimary"
                                                    )}
                                                >
                                                    <div className={cn(
                                                        "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300",
                                                        activeServiceId === service.id ? "bg-primary text-white" : "bg-slate-100 group-hover:bg-slate-200"
                                                    )}>
                                                        <service.icon size={20} strokeWidth={2.5} />
                                                    </div>
                                                    <span className="font-bold text-sm tracking-tight">{service.title}</span>
                                                </button>
                                            ))}
                                        </div>

                                        {/* Dropdown Content Area */}
                                        <div className="flex-1 p-8 bg-white relative">
                                            <AnimatePresence mode="wait">
                                                <motion.div
                                                    key={activeServiceId}
                                                    initial={{ opacity: 0, x: 10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="h-full flex flex-col"
                                                >
                                                    <div className="mb-6">
                                                        <h4 className="text-xl font-display font-bold text-textPrimary mb-2">{activeService.title}</h4>
                                                        <p className="text-textMuted text-xs leading-relaxed max-w-md">
                                                            {activeService.description}
                                                        </p>
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-4">
                                                        {activeService.techStack.map((tech) => (
                                                            <div key={tech.name} className="flex items-center gap-3 p-3 rounded-xl border border-slate-50 hover:border-primary/20 hover:bg-slate-50/50 transition-all group/tech">
                                                                <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center overflow-hidden shrink-0 border border-slate-100 group-hover/tech:border-primary/20 transition-colors">
                                                                    {tech.logoUrl ? (
                                                                        <img 
                                                                            src={tech.logoUrl} 
                                                                            alt={tech.name} 
                                                                            className="w-6 h-6 object-contain"
                                                                            onError={(e) => {
                                                                                (e.target as HTMLImageElement).style.display = 'none';
                                                                                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                                                            }}
                                                                        />
                                                                    ) : null}
                                                                    <tech.icon 
                                                                        size={20} 
                                                                        className={cn(
                                                                            "text-primary",
                                                                            tech.logoUrl ? "hidden" : ""
                                                                        )} 
                                                                    />
                                                                </div>
                                                                <div className="min-w-0">
                                                                    <p className="font-bold text-[13px] text-textPrimary truncate">{tech.name}</p>
                                                                    <p className="text-[10px] font-bold text-textMuted uppercase tracking-wider truncate">{tech.category}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className="mt-10 pt-6 border-t border-slate-50">
                                                        <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all">
                                                            Talk to our experts <ArrowRight size={16} />
                                                        </a>
                                                    </div>
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>
                                    </div>
								</NavigationMenuContent>
							</NavigationMenuItem>
                            
                            {NAV_LINKS.filter(link => link.label !== 'Services' && link.label !== 'Contact').map(link => (
                                <NavigationMenuItem key={link.label}>
                                    <NavigationMenuLink href={link.href} asChild>
                                        <a className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-textMuted transition-colors hover:text-primary">
                                            {link.label}
                                        </a>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div className="hidden items-center gap-3 md:flex">
					<Button variant="ghost" className="rounded-full px-6 text-textMuted hover:text-primary" asChild>
                        <a href="#contact">Consultation</a>
                    </Button>
					<Button className="rounded-full px-6 shadow-lg shadow-primary/20 hover:scale-105 transition-transform" asChild>
                        <a href="#contact">Get a Quote</a>
                    </Button>
				</div>
				<Button
					size="icon"
					variant="ghost"
					onClick={() => setOpen(!open)}
					className="md:hidden text-textPrimary hover:text-primary"
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label="Toggle menu"
				>
					<MenuToggleIcon open={open} className="size-6" duration={300} />
				</Button>
			</nav>

			<MobileMenu open={open} className="flex flex-col justify-between gap-8 overflow-y-auto">
				<NavigationMenu className="max-w-full">
					<div className="flex w-full flex-col gap-y-6">
						<div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-textMuted mb-4 block">Our Services</span>
                            <div className="grid gap-2">
                                {DETAILED_SERVICES.map((link) => (
                                    <ListItem key={link.title} title={link.title} description={link.description} icon={link.icon} href="#contact" onClick={() => setOpen(false)} />
                                ))}
                            </div>
                        </div>
						
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-textMuted mb-4 block">Navigation</span>
                            <div className="flex flex-col gap-4 px-2">
                                {NAV_LINKS.filter(link => link.label !== 'Services').map(link => (
                                    <a 
                                        key={link.label} 
                                        href={link.href} 
                                        onClick={() => setOpen(false)}
                                        className="text-3xl font-display font-bold text-textPrimary hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
					</div>
				</NavigationMenu>
				<div className="flex flex-col gap-3 pb-10">
					<Button size="lg" className="w-full rounded-2xl h-14 text-base font-bold shadow-xl shadow-primary/20" asChild>
						<a href="#contact" onClick={() => setOpen(false)}>Get a Free Quote</a>
					</Button>
				</div>
			</MobileMenu>
		</header>
	);
}

type MobileMenuProps = React.ComponentProps<'div'> & {
	open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
	if (!open || typeof window === 'undefined') return null;

	return createPortal(
		<div
			id="mobile-menu"
			className={cn(
				'bg-white/95 backdrop-blur-xl',
				'fixed inset-0 top-[64px] z-40 flex flex-col overflow-hidden md:hidden',
			)}
		>
			<div
				data-slot={open ? 'open' : 'closed'}
				className={cn(
					'data-[slot=open]:animate-in data-[slot=open]:slide-in-from-right-full duration-500 ease-out',
					'size-full p-8',
					className,
				)}
				{...props}
			>
				{children}
			</div>
		</div>,
		document.body,
	);
}

function ListItem({
	title,
	description,
	icon: Icon,
	className,
	href,
    onClick,
	...props
}: React.ComponentProps<typeof NavigationMenuLink> & { title: string; description?: string; icon: any; href: string; onClick?: () => void }) {
	return (
		<NavigationMenuLink className={cn('w-full flex flex-row gap-x-4 hover:bg-slate-50 focus:bg-slate-50 rounded-2xl p-4 transition-all group', className)} {...props} asChild>
			<a href={href} onClick={onClick}>
				<div className="bg-primary/5 flex aspect-square size-12 items-center justify-center rounded-2xl shrink-0 group-hover:bg-primary/10 transition-colors">
					<Icon className="text-primary size-6" />
				</div>
				<div className="flex flex-col items-start justify-center">
					<span className="font-bold text-sm text-textPrimary mb-1">{title}</span>
					<span className="text-textMuted text-xs line-clamp-2 leading-relaxed">{description}</span>
				</div>
			</a>
		</NavigationMenuLink>
	);
}

function useScroll(threshold: number) {
	const [scrolled, setScrolled] = React.useState(false);

	const onScroll = React.useCallback(() => {
		setScrolled(window.scrollY > threshold);
	}, [threshold]);

	React.useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [onScroll]);

	React.useEffect(() => {
		onScroll();
	}, [onScroll]);

	return scrolled;
}
