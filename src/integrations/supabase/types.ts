export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      actividades: {
        Row: {
          avance: number
          estado: string
          id: string
          nombre: string
          responsable: string
          subproceso_id: string
        }
        Insert: {
          avance?: number
          estado?: string
          id?: string
          nombre: string
          responsable?: string
          subproceso_id: string
        }
        Update: {
          avance?: number
          estado?: string
          id?: string
          nombre?: string
          responsable?: string
          subproceso_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "actividades_subproceso_id_fkey"
            columns: ["subproceso_id"]
            isOneToOne: false
            referencedRelation: "subprocesos"
            referencedColumns: ["id"]
          },
        ]
      }
      auditoria: {
        Row: {
          accion: string
          detalle: string
          fecha: string
          id: string
          modulo: string
          usuario: string
        }
        Insert: {
          accion: string
          detalle?: string
          fecha?: string
          id?: string
          modulo: string
          usuario: string
        }
        Update: {
          accion?: string
          detalle?: string
          fecha?: string
          id?: string
          modulo?: string
          usuario?: string
        }
        Relationships: []
      }
      criterios: {
        Row: {
          descripcion: string
          id: string
          nombre: string
          pilar: string
        }
        Insert: {
          descripcion?: string
          id: string
          nombre: string
          pilar: string
        }
        Update: {
          descripcion?: string
          id?: string
          nombre?: string
          pilar?: string
        }
        Relationships: []
      }
      documentos: {
        Row: {
          actualizado: string
          estado: string
          id: string
          nombre: string
          subproceso_id: string
          tipo: string
          version: string
        }
        Insert: {
          actualizado?: string
          estado?: string
          id?: string
          nombre: string
          subproceso_id: string
          tipo?: string
          version?: string
        }
        Update: {
          actualizado?: string
          estado?: string
          id?: string
          nombre?: string
          subproceso_id?: string
          tipo?: string
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: "documentos_subproceso_id_fkey"
            columns: ["subproceso_id"]
            isOneToOne: false
            referencedRelation: "subprocesos"
            referencedColumns: ["id"]
          },
        ]
      }
      evidencias: {
        Row: {
          fecha: string
          id: string
          nombre: string
          registro_id: string
          subido_por: string
          tipo: string
        }
        Insert: {
          fecha?: string
          id?: string
          nombre: string
          registro_id: string
          subido_por?: string
          tipo?: string
        }
        Update: {
          fecha?: string
          id?: string
          nombre?: string
          registro_id?: string
          subido_por?: string
          tipo?: string
        }
        Relationships: [
          {
            foreignKeyName: "evidencias_registro_id_fkey"
            columns: ["registro_id"]
            isOneToOne: false
            referencedRelation: "registros"
            referencedColumns: ["id"]
          },
        ]
      }
      indicadores: {
        Row: {
          codigo: string
          formula: string
          frecuencia: string
          id: string
          nombre: string
          peso: number
          polaridad: string
          responsable: string
          subproceso_id: string
          unidad: string
        }
        Insert: {
          codigo: string
          formula?: string
          frecuencia?: string
          id?: string
          nombre: string
          peso?: number
          polaridad?: string
          responsable?: string
          subproceso_id: string
          unidad?: string
        }
        Update: {
          codigo?: string
          formula?: string
          frecuencia?: string
          id?: string
          nombre?: string
          peso?: number
          polaridad?: string
          responsable?: string
          subproceso_id?: string
          unidad?: string
        }
        Relationships: [
          {
            foreignKeyName: "indicadores_subproceso_id_fkey"
            columns: ["subproceso_id"]
            isOneToOne: false
            referencedRelation: "subprocesos"
            referencedColumns: ["id"]
          },
        ]
      }
      metas: {
        Row: {
          anio: number
          id: string
          indicador_id: string
          valor: number
        }
        Insert: {
          anio: number
          id?: string
          indicador_id: string
          valor?: number
        }
        Update: {
          anio?: number
          id?: string
          indicador_id?: string
          valor?: number
        }
        Relationships: [
          {
            foreignKeyName: "metas_indicador_id_fkey"
            columns: ["indicador_id"]
            isOneToOne: false
            referencedRelation: "indicadores"
            referencedColumns: ["id"]
          },
        ]
      }
      procedimientos: {
        Row: {
          actualizado: string
          estado: string
          id: string
          nombre: string
          subproceso_id: string
          version: string
        }
        Insert: {
          actualizado?: string
          estado?: string
          id?: string
          nombre: string
          subproceso_id: string
          version?: string
        }
        Update: {
          actualizado?: string
          estado?: string
          id?: string
          nombre?: string
          subproceso_id?: string
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: "procedimientos_subproceso_id_fkey"
            columns: ["subproceso_id"]
            isOneToOne: false
            referencedRelation: "subprocesos"
            referencedColumns: ["id"]
          },
        ]
      }
      procesos: {
        Row: {
          area: string
          codigo: string
          criterio_id: string
          id: string
          lider: string
          nombre: string
        }
        Insert: {
          area: string
          codigo: string
          criterio_id: string
          id: string
          lider?: string
          nombre: string
        }
        Update: {
          area?: string
          codigo?: string
          criterio_id?: string
          id?: string
          lider?: string
          nombre?: string
        }
        Relationships: [
          {
            foreignKeyName: "procesos_criterio_id_fkey"
            columns: ["criterio_id"]
            isOneToOne: false
            referencedRelation: "criterios"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          correo: string
          created_at: string
          id: string
          nombre: string | null
        }
        Insert: {
          avatar_url?: string | null
          correo: string
          created_at?: string
          id: string
          nombre?: string | null
        }
        Update: {
          avatar_url?: string | null
          correo?: string
          created_at?: string
          id?: string
          nombre?: string | null
        }
        Relationships: []
      }
      registros: {
        Row: {
          anio: number
          fecha: string
          id: string
          indicador_id: string
          periodo: string
          registrado_por: string
          valor: number
        }
        Insert: {
          anio: number
          fecha?: string
          id?: string
          indicador_id: string
          periodo: string
          registrado_por?: string
          valor: number
        }
        Update: {
          anio?: number
          fecha?: string
          id?: string
          indicador_id?: string
          periodo?: string
          registrado_por?: string
          valor?: number
        }
        Relationships: [
          {
            foreignKeyName: "registros_indicador_id_fkey"
            columns: ["indicador_id"]
            isOneToOne: false
            referencedRelation: "indicadores"
            referencedColumns: ["id"]
          },
        ]
      }
      subprocesos: {
        Row: {
          id: string
          nombre: string
          proceso_id: string
        }
        Insert: {
          id: string
          nombre: string
          proceso_id: string
        }
        Update: {
          id?: string
          nombre?: string
          proceso_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subprocesos_proceso_id_fkey"
            columns: ["proceso_id"]
            isOneToOne: false
            referencedRelation: "procesos"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      usuarios_sgi: {
        Row: {
          activo: boolean
          area: string
          correo: string
          id: string
          nombre: string
          rol: string
        }
        Insert: {
          activo?: boolean
          area?: string
          correo: string
          id?: string
          nombre: string
          rol?: string
        }
        Update: {
          activo?: boolean
          area?: string
          correo?: string
          id?: string
          nombre?: string
          rol?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      es_gestor: { Args: never; Returns: boolean }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_bup: { Args: never; Returns: boolean }
      mi_area: { Args: never; Returns: string }
      puede_editar_indicador: { Args: { _ind: string }; Returns: boolean }
      puede_editar_registro: { Args: { _reg: string }; Returns: boolean }
      puede_editar_subproceso: { Args: { _sub: string }; Returns: boolean }
      sincronizar_usuario: { Args: never; Returns: string }
    }
    Enums: {
      app_role:
        | "admin"
        | "directivo"
        | "lider"
        | "responsable"
        | "auditor"
        | "lector"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: [
        "admin",
        "directivo",
        "lider",
        "responsable",
        "auditor",
        "lector",
      ],
    },
  },
} as const
