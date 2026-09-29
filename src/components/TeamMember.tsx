import type { TeamMember as TeamMemberType } from "@/data/team";

export function TeamMember({ member }: { member: TeamMemberType }) {
  return (
    <div className="rounded-lg border border-border bg-background p-6 text-center">
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-surface font-display text-2xl font-bold text-primary">
        {member.photo ? null : member.name.charAt(0) === "[" ? "?" : member.name.charAt(0)}
      </div>
      <p className="mt-4 font-display text-lg font-semibold text-primary">{member.name}</p>
      <p className="text-sm text-accent-dark">{member.role}</p>
      {member.bio && <p className="mt-3 text-sm leading-relaxed text-text-muted">{member.bio}</p>}
    </div>
  );
}
