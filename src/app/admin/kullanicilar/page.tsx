"use client";

import { useEffect, useState } from "react";

interface User {
  id: string;
  username: string;
  name: string;
  role: string;
  active: boolean;
}

const ROLE_LABELS: Record<string, string> = {
  admin: "Yönetici",
  editor: "Editör",
  viewer: "İzleyici",
};

export default function KullanicilarPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ username: "", password: "", name: "", role: "editor" });
  const [saving, setSaving] = useState(false);
  const [editingPw, setEditingPw] = useState<string | null>(null);
  const [newPw, setNewPw] = useState("");

  async function load() {
    const res = await fetch("/api/users");
    if (res.ok) setUsers(await res.json());
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const d = await res.json();
        alert(d.error || "Hata");
        return;
      }
      setForm({ username: "", password: "", name: "", role: "editor" });
      setShowForm(false);
      await load();
    } finally {
      setSaving(false);
    }
  }

  async function handleToggle(user: User) {
    await fetch(`/api/users/${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: user.name, active: !user.active }),
    });
    await load();
  }

  async function handleRoleChange(user: User, role: string) {
    await fetch(`/api/users/${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: user.name, role }),
    });
    await load();
  }

  async function handlePasswordChange(userId: string) {
    if (!newPw || newPw.length < 4) { alert("Şifre en az 4 karakter olmalı"); return; }
    await fetch(`/api/users/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: newPw }),
    });
    setEditingPw(null);
    setNewPw("");
    alert("Şifre güncellendi");
  }

  async function handleDelete(id: string) {
    if (!confirm("Bu kullanıcıyı silmek istediğinize emin misiniz?")) return;
    const res = await fetch(`/api/users/${id}`, { method: "DELETE" });
    if (!res.ok) {
      const d = await res.json();
      alert(d.error || "Hata");
      return;
    }
    await load();
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Kullanıcılar</h1>
        <button
          type="button"
          onClick={() => setShowForm(!showForm)}
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          {showForm ? "İptal" : "+ Yeni Kullanıcı"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleAdd} className="mb-8 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">Kullanıcı Adı</label>
              <input
                type="text"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                required
                className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">Ad Soyad</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">Şifre</label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                minLength={4}
                className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">Rol</label>
              <select
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
              >
                <option value="admin">Yönetici (Tam yetki)</option>
                <option value="editor">Editör (Blog, Referans, Partner, Mesajlar)</option>
                <option value="viewer">İzleyici (Sadece mesajlar)</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            disabled={saving}
            className="mt-4 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900"
          >
            {saving ? "Kaydediliyor…" : "Kullanıcı Ekle"}
          </button>
        </form>
      )}

      {loading ? (
        <p className="text-zinc-500">Yükleniyor…</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800">
                <th className="p-3 font-medium text-zinc-900 dark:text-zinc-50">Kullanıcı Adı</th>
                <th className="p-3 font-medium text-zinc-900 dark:text-zinc-50">Ad Soyad</th>
                <th className="p-3 font-medium text-zinc-900 dark:text-zinc-50">Rol</th>
                <th className="p-3 font-medium text-zinc-900 dark:text-zinc-50">Durum</th>
                <th className="p-3 font-medium text-zinc-900 dark:text-zinc-50">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-b border-zinc-100 dark:border-zinc-800/50">
                  <td className="p-3 font-mono text-zinc-900 dark:text-zinc-50">{u.username}</td>
                  <td className="p-3 text-zinc-700 dark:text-zinc-300">{u.name}</td>
                  <td className="p-3">
                    <select
                      value={u.role}
                      onChange={(e) => handleRoleChange(u, e.target.value)}
                      className="rounded border border-zinc-200 bg-transparent px-2 py-1 text-xs dark:border-zinc-700 dark:text-zinc-300"
                    >
                      <option value="admin">Yönetici</option>
                      <option value="editor">Editör</option>
                      <option value="viewer">İzleyici</option>
                    </select>
                  </td>
                  <td className="p-3">
                    <button
                      type="button"
                      onClick={() => handleToggle(u)}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        u.active
                          ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                          : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-500"
                      }`}
                    >
                      {u.active ? "Aktif" : "Pasif"}
                    </button>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      {editingPw === u.id ? (
                        <div className="flex items-center gap-1">
                          <input
                            type="password"
                            value={newPw}
                            onChange={(e) => setNewPw(e.target.value)}
                            placeholder="Yeni şifre"
                            className="w-28 rounded border border-zinc-200 px-2 py-1 text-xs dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
                          />
                          <button
                            type="button"
                            onClick={() => handlePasswordChange(u.id)}
                            className="text-xs text-blue-600 hover:underline"
                          >
                            Kaydet
                          </button>
                          <button
                            type="button"
                            onClick={() => { setEditingPw(null); setNewPw(""); }}
                            className="text-xs text-zinc-400"
                          >
                            İptal
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setEditingPw(u.id)}
                          className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
                        >
                          Şifre Değiştir
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => handleDelete(u.id)}
                        className="text-xs text-red-500 hover:text-red-700"
                      >
                        Sil
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-6 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
        <h3 className="mb-3 text-sm font-semibold text-zinc-900 dark:text-zinc-50">Yetki Tablosu</h3>
        <div className="text-xs text-zinc-600 dark:text-zinc-400">
          <div className="grid grid-cols-4 gap-2 border-b border-zinc-100 pb-2 font-medium dark:border-zinc-800">
            <span>Modül</span>
            <span>Yönetici</span>
            <span>Editör</span>
            <span>İzleyici</span>
          </div>
          {["Blog", "Referanslar", "Partnerler", "Mesajlar", "Kullanıcılar"].map((m) => (
            <div key={m} className="grid grid-cols-4 gap-2 border-b border-zinc-50 py-1.5 dark:border-zinc-800/50">
              <span>{m}</span>
              <span className="text-green-600">✓</span>
              <span className={m === "Kullanıcılar" ? "text-red-400" : "text-green-600"}>{m === "Kullanıcılar" ? "✗" : "✓"}</span>
              <span className={m === "Mesajlar" ? "text-green-600" : "text-red-400"}>{m === "Mesajlar" ? "✓" : "✗"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
