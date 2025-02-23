export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      achievements: {
        Row: {
          created_at: string | null
          criteria: Json
          description: string
          icon: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          criteria: Json
          description: string
          icon: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          criteria?: Json
          description?: string
          icon?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      battle_submissions: {
        Row: {
          battle_id: string | null
          code: string
          execution_time: number | null
          id: string
          is_correct: boolean | null
          submitted_at: string | null
          user_id: string | null
        }
        Insert: {
          battle_id?: string | null
          code: string
          execution_time?: number | null
          id?: string
          is_correct?: boolean | null
          submitted_at?: string | null
          user_id?: string | null
        }
        Update: {
          battle_id?: string | null
          code?: string
          execution_time?: number | null
          id?: string
          is_correct?: boolean | null
          submitted_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "battle_submissions_battle_id_fkey"
            columns: ["battle_id"]
            isOneToOne: false
            referencedRelation: "battles"
            referencedColumns: ["id"]
          },
        ]
      }
      battles: {
        Row: {
          completed_at: string | null
          created_at: string | null
          id: string
          player1_id: string | null
          player1_rating: number | null
          player2_id: string | null
          player2_rating: number | null
          question_id: number | null
          started_at: string | null
          status: string | null
          time_limit: number | null
          topic_id: number | null
          winner_id: string | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          player1_id?: string | null
          player1_rating?: number | null
          player2_id?: string | null
          player2_rating?: number | null
          question_id?: number | null
          started_at?: string | null
          status?: string | null
          time_limit?: number | null
          topic_id?: number | null
          winner_id?: string | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          player1_id?: string | null
          player1_rating?: number | null
          player2_id?: string | null
          player2_rating?: number | null
          question_id?: number | null
          started_at?: string | null
          status?: string | null
          time_limit?: number | null
          topic_id?: number | null
          winner_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "battles_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "coding_questions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "battles_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "topics"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          created_at: string | null
          description: string | null
          difficulty_level: number | null
          id: number
          name: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          difficulty_level?: number | null
          id?: number
          name: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          difficulty_level?: number | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      coding_questions: {
        Row: {
          company: string | null
          created_at: string | null
          description: string
          difficulty: string | null
          id: number
          initial_code: string | null
          test_cases: Json | null
          title: string
          topic_id: number | null
        }
        Insert: {
          company?: string | null
          created_at?: string | null
          description: string
          difficulty?: string | null
          id?: number
          initial_code?: string | null
          test_cases?: Json | null
          title: string
          topic_id?: number | null
        }
        Update: {
          company?: string | null
          created_at?: string | null
          description?: string
          difficulty?: string | null
          id?: number
          initial_code?: string | null
          test_cases?: Json | null
          title?: string
          topic_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "coding_questions_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "topics"
            referencedColumns: ["id"]
          },
        ]
      }
      matchmaking_queue: {
        Row: {
          category_id: number | null
          created_at: string | null
          id: string
          max_rating: number | null
          min_rating: number | null
          user_id: string | null
        }
        Insert: {
          category_id?: number | null
          created_at?: string | null
          id?: string
          max_rating?: number | null
          min_rating?: number | null
          user_id?: string | null
        }
        Update: {
          category_id?: number | null
          created_at?: string | null
          id?: string
          max_rating?: number | null
          min_rating?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "matchmaking_queue_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          full_name: string | null
          id: string
          matches_played: number | null
          matches_won: number | null
          rating: number | null
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          id: string
          matches_played?: number | null
          matches_won?: number | null
          rating?: number | null
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          matches_played?: number | null
          matches_won?: number | null
          rating?: number | null
          updated_at?: string | null
          username?: string | null
        }
        Relationships: []
      }
      skill_categories: {
        Row: {
          created_at: string | null
          description: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      submissions: {
        Row: {
          code: string
          created_at: string | null
          execution_time: number | null
          id: string
          is_correct: boolean | null
          question_id: number | null
          user_id: string | null
        }
        Insert: {
          code: string
          created_at?: string | null
          execution_time?: number | null
          id?: string
          is_correct?: boolean | null
          question_id?: number | null
          user_id?: string | null
        }
        Update: {
          code?: string
          created_at?: string | null
          execution_time?: number | null
          id?: string
          is_correct?: boolean | null
          question_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "submissions_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "coding_questions"
            referencedColumns: ["id"]
          },
        ]
      }
      topics: {
        Row: {
          category_id: number | null
          created_at: string | null
          description: string | null
          difficulty_level: number | null
          id: number
          name: string
        }
        Insert: {
          category_id?: number | null
          created_at?: string | null
          description?: string | null
          difficulty_level?: number | null
          id?: number
          name: string
        }
        Update: {
          category_id?: number | null
          created_at?: string | null
          description?: string | null
          difficulty_level?: number | null
          id?: number
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "topics_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      tournament_matches: {
        Row: {
          battle_id: string | null
          created_at: string | null
          id: string
          player1_id: string | null
          player2_id: string | null
          round: number
          scheduled_for: string | null
          status: string
          tournament_id: string | null
          winner_id: string | null
        }
        Insert: {
          battle_id?: string | null
          created_at?: string | null
          id?: string
          player1_id?: string | null
          player2_id?: string | null
          round: number
          scheduled_for?: string | null
          status?: string
          tournament_id?: string | null
          winner_id?: string | null
        }
        Update: {
          battle_id?: string | null
          created_at?: string | null
          id?: string
          player1_id?: string | null
          player2_id?: string | null
          round?: number
          scheduled_for?: string | null
          status?: string
          tournament_id?: string | null
          winner_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tournament_matches_battle_id_fkey"
            columns: ["battle_id"]
            isOneToOne: false
            referencedRelation: "battles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tournament_matches_player1_id_fkey"
            columns: ["player1_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tournament_matches_player2_id_fkey"
            columns: ["player2_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tournament_matches_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournaments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tournament_matches_winner_id_fkey"
            columns: ["winner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      tournament_participants: {
        Row: {
          created_at: string | null
          id: string
          status: string
          tournament_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          status?: string
          tournament_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          status?: string
          tournament_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tournament_participants_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournaments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tournament_participants_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      tournaments: {
        Row: {
          category_id: string | null
          created_at: string | null
          description: string | null
          end_date: string
          id: string
          max_participants: number | null
          name: string
          start_date: string
          status: string
        }
        Insert: {
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          end_date: string
          id?: string
          max_participants?: number | null
          name: string
          start_date: string
          status?: string
        }
        Update: {
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          end_date?: string
          id?: string
          max_participants?: number | null
          name?: string
          start_date?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "tournaments_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "skill_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      user_achievements: {
        Row: {
          achievement_id: string | null
          id: string
          unlocked_at: string | null
          user_id: string | null
        }
        Insert: {
          achievement_id?: string | null
          id?: string
          unlocked_at?: string | null
          user_id?: string | null
        }
        Update: {
          achievement_id?: string | null
          id?: string
          unlocked_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_achievements_achievement_id_fkey"
            columns: ["achievement_id"]
            isOneToOne: false
            referencedRelation: "achievements"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_achievements_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_performance: {
        Row: {
          battle_id: string | null
          created_at: string | null
          execution_time: number | null
          id: string
          rating_change: number
          solved: boolean | null
          user_id: string | null
        }
        Insert: {
          battle_id?: string | null
          created_at?: string | null
          execution_time?: number | null
          id?: string
          rating_change: number
          solved?: boolean | null
          user_id?: string | null
        }
        Update: {
          battle_id?: string | null
          created_at?: string | null
          execution_time?: number | null
          id?: string
          rating_change?: number
          solved?: boolean | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_performance_battle_id_fkey"
            columns: ["battle_id"]
            isOneToOne: false
            referencedRelation: "battles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      user_skill_ratings: {
        Row: {
          category_id: string | null
          created_at: string | null
          id: string
          rating: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          category_id?: string | null
          created_at?: string | null
          id?: string
          rating?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          category_id?: string | null
          created_at?: string | null
          id?: string
          rating?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_skill_ratings_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "skill_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_skill_ratings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_battle_stats: {
        Args: {
          p_user_id: string
        }
        Returns: {
          total_battles: number
          wins: number
          losses: number
          avg_solve_time: number
          favorite_category: string
          highest_rating: number
          current_streak: number
        }[]
      }
      has_role: {
        Args: {
          user_id: string
          check_role: Database["public"]["Enums"]["app_role"]
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
