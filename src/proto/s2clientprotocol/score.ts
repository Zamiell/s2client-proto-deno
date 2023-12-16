/* eslint-disable */
// @generated by protobuf-ts 2.8.2 with parameter ts_nocheck,eslint_disable
// @generated from protobuf file "s2clientprotocol/score.proto" (package "SC2APIProtocol", syntax proto2)
// tslint:disable
// @ts-nocheck
import type {
  BinaryReadOptions,
  BinaryWriteOptions,
  IBinaryReader,
  IBinaryWriter,
  PartialMessage,
} from "@protobuf-ts/runtime";
import {
  MESSAGE_TYPE,
  MessageType,
  UnknownFieldHandler,
  WireType,
  reflectionMergePartial,
} from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message SC2APIProtocol.Score
 */
export interface Score {
  /**
   * @generated from protobuf field: optional SC2APIProtocol.Score.ScoreType score_type = 6;
   */
  scoreType?: Score_ScoreType;
  /**
   * @generated from protobuf field: optional int32 score = 7;
   */
  score?: number; // Note: check score_type to know whether this is a melee score or curriculum score
  /**
   * @generated from protobuf field: optional SC2APIProtocol.ScoreDetails score_details = 8;
   */
  scoreDetails?: ScoreDetails;
}
/**
 * @generated from protobuf enum SC2APIProtocol.Score.ScoreType
 */
export enum Score_ScoreType {
  /**
   * @generated synthetic value - protobuf-ts requires all enums to have a 0 value
   */
  UNSPECIFIED$ = 0,
  /**
   * map generated score (from curriculum maps with special scoring)
   *
   * @generated from protobuf enum value: Curriculum = 1;
   */
  Curriculum = 1,
  /**
   * summation of in-progress and current units/buildings value + minerals + vespene
   *
   * @generated from protobuf enum value: Melee = 2;
   */
  Melee = 2,
}
/**
 * @generated from protobuf message SC2APIProtocol.CategoryScoreDetails
 */
export interface CategoryScoreDetails {
  /**
   * @generated from protobuf field: optional float none = 1;
   */
  none?: number; // Used when no other category is configured in game data
  /**
   * @generated from protobuf field: optional float army = 2;
   */
  army?: number;
  /**
   * @generated from protobuf field: optional float economy = 3;
   */
  economy?: number;
  /**
   * @generated from protobuf field: optional float technology = 4;
   */
  technology?: number;
  /**
   * @generated from protobuf field: optional float upgrade = 5;
   */
  upgrade?: number;
}
/**
 * @generated from protobuf message SC2APIProtocol.VitalScoreDetails
 */
export interface VitalScoreDetails {
  /**
   * @generated from protobuf field: optional float life = 1;
   */
  life?: number;
  /**
   * @generated from protobuf field: optional float shields = 2;
   */
  shields?: number;
  /**
   * @generated from protobuf field: optional float energy = 3;
   */
  energy?: number;
}
/**
 * @generated from protobuf message SC2APIProtocol.ScoreDetails
 */
export interface ScoreDetails {
  /**
   * Sum of time any available structure able to produce a unit is not. The time stacks, as in, three idle barracks will increase idle_production_time three times quicker than just one.
   *
   * @generated from protobuf field: optional float idle_production_time = 1;
   */
  idleProductionTime?: number;
  /**
   * Sum of time any worker is not mining. Note a worker building is not idle and three idle workers will increase this value three times quicker than just one.
   *
   * @generated from protobuf field: optional float idle_worker_time = 2;
   */
  idleWorkerTime?: number;
  /**
   * Sum of minerals and vespene spent on completed units.
   *
   * @generated from protobuf field: optional float total_value_units = 3;
   */
  totalValueUnits?: number;
  /**
   * Sum of minerals and vespene spent on completed structures.
   *
   * @generated from protobuf field: optional float total_value_structures = 4;
   */
  totalValueStructures?: number;
  /**
   * Sum of minerals and vespene of units, belonging to the opponent, that the player has destroyed.
   *
   * @generated from protobuf field: optional float killed_value_units = 5;
   */
  killedValueUnits?: number;
  /**
   * Sum of minerals and vespene of structures, belonging to the opponent, that the player has destroyed.
   *
   * @generated from protobuf field: optional float killed_value_structures = 6;
   */
  killedValueStructures?: number;
  /**
   * Sum of minerals collected by the player.
   *
   * @generated from protobuf field: optional float collected_minerals = 7;
   */
  collectedMinerals?: number;
  /**
   * Sum of vespene collected by the player.
   *
   * @generated from protobuf field: optional float collected_vespene = 8;
   */
  collectedVespene?: number;
  /**
   * Estimated income of minerals over the next minute based on the players current income. The unit is minerals per minute.
   *
   * @generated from protobuf field: optional float collection_rate_minerals = 9;
   */
  collectionRateMinerals?: number;
  /**
   * Estimated income of vespene over the next minute based on the players current income. The unit is vespene per minute.
   *
   * @generated from protobuf field: optional float collection_rate_vespene = 10;
   */
  collectionRateVespene?: number;
  /**
   * Sum of spent minerals at the moment it is spent. For example, this number is incremented by 50 the moment an scv is queued in a command center.  It is decremented by 50 if that unit is canceled.
   *
   * @generated from protobuf field: optional float spent_minerals = 11;
   */
  spentMinerals?: number;
  /**
   * Sum of spent vespene at the moment it is spent. For example, this number is incremented by 50 when a reaper is queued but decremented by 50 if it is canceled.
   *
   * @generated from protobuf field: optional float spent_vespene = 12;
   */
  spentVespene?: number;
  // The following entries contains floating point values for the following categories:
  //   none - There is no category defined in game data.
  //   army - This category includes all military units but not workers.
  //   economy - This category contains town halls, supply structures, vespene buildings and workers.
  //   technology - This category is any structure that produces units or upgrades, Barracks and Engineering Bays both fall in this category, for example.
  //   upgrade - This category is upgrades such as warp gate or weapons upgrades.

  /**
   * Sum of food, or supply, utilized in the categories above.
   *
   * @generated from protobuf field: optional SC2APIProtocol.CategoryScoreDetails food_used = 13;
   */
  foodUsed?: CategoryScoreDetails;
  /**
   * Sum of enemies catagories destroyed in minerals.
   *
   * @generated from protobuf field: optional SC2APIProtocol.CategoryScoreDetails killed_minerals = 14;
   */
  killedMinerals?: CategoryScoreDetails;
  /**
   * Sum of enemies catagories destroyed in vespene.
   *
   * @generated from protobuf field: optional SC2APIProtocol.CategoryScoreDetails killed_vespene = 15;
   */
  killedVespene?: CategoryScoreDetails;
  /**
   *  Sum of lost minerals for the player in each category.
   *
   * @generated from protobuf field: optional SC2APIProtocol.CategoryScoreDetails lost_minerals = 16;
   */
  lostMinerals?: CategoryScoreDetails;
  /**
   * Sum of lost vespene for the player in each category.
   *
   * @generated from protobuf field: optional SC2APIProtocol.CategoryScoreDetails lost_vespene = 17;
   */
  lostVespene?: CategoryScoreDetails;
  /**
   * Sum of the lost minerals via destroying the players own units/buildings.
   *
   * @generated from protobuf field: optional SC2APIProtocol.CategoryScoreDetails friendly_fire_minerals = 18;
   */
  friendlyFireMinerals?: CategoryScoreDetails;
  /**
   * Sum of the lost vespene via destroying the players own units/buildings.
   *
   * @generated from protobuf field: optional SC2APIProtocol.CategoryScoreDetails friendly_fire_vespene = 19;
   */
  friendlyFireVespene?: CategoryScoreDetails;
  /**
   * Sum of used minerals for the player in each category for each existing unit or upgrade. Therefore if a unit died worth 50 minerals this number will be decremented by 50.
   *
   * @generated from protobuf field: optional SC2APIProtocol.CategoryScoreDetails used_minerals = 20;
   */
  usedMinerals?: CategoryScoreDetails;
  /**
   * Sum of used vespene for the player in each category. Therefore if a unit died worth 50 vespene this number will be decremented by 50.
   *
   * @generated from protobuf field: optional SC2APIProtocol.CategoryScoreDetails used_vespene = 21;
   */
  usedVespene?: CategoryScoreDetails;
  /**
   * Sum of used minerals throughout the entire game for each category. Unlike used_minerals, this value is never decremented.
   *
   * @generated from protobuf field: optional SC2APIProtocol.CategoryScoreDetails total_used_minerals = 22;
   */
  totalUsedMinerals?: CategoryScoreDetails;
  /**
   * Sum of used vespene throughout the entire game for each category. Unlike used_vespene, this value is never decremented.
   *
   * @generated from protobuf field: optional SC2APIProtocol.CategoryScoreDetails total_used_vespene = 23;
   */
  totalUsedVespene?: CategoryScoreDetails;
  /**
   * Sum of damage dealt to the player's opponent for each category.
   *
   * @generated from protobuf field: optional SC2APIProtocol.VitalScoreDetails total_damage_dealt = 24;
   */
  totalDamageDealt?: VitalScoreDetails;
  /**
   * Sum of damage taken by the player for each category.
   *
   * @generated from protobuf field: optional SC2APIProtocol.VitalScoreDetails total_damage_taken = 25;
   */
  totalDamageTaken?: VitalScoreDetails;
  /**
   * Sum of health healed by the player. Note that technology can be healed (by queens) or repaired (by SCVs).
   *
   * @generated from protobuf field: optional SC2APIProtocol.VitalScoreDetails total_healed = 26;
   */
  totalHealed?: VitalScoreDetails;
  /**
   * Recent raw APM.
   *
   * @generated from protobuf field: optional float current_apm = 27;
   */
  currentApm?: number;
  /**
   * Recent effective APM.
   *
   * @generated from protobuf field: optional float current_effective_apm = 28;
   */
  currentEffectiveApm?: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class Score$Type extends MessageType<Score> {
  constructor() {
    super("SC2APIProtocol.Score", [
      {
        no: 6,
        name: "score_type",
        kind: "enum",
        opt: true,
        T: () => ["SC2APIProtocol.Score.ScoreType", Score_ScoreType],
      },
      {
        no: 7,
        name: "score",
        kind: "scalar",
        opt: true,
        T: 5 /*ScalarType.INT32*/,
      },
      { no: 8, name: "score_details", kind: "message", T: () => ScoreDetails },
    ]);
  }
  create(value?: PartialMessage<Score>): Score {
    const message = {};
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<Score>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: Score,
  ): Score {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* optional SC2APIProtocol.Score.ScoreType score_type */ 6:
          message.scoreType = reader.int32();
          break;
        case /* optional int32 score */ 7:
          message.score = reader.int32();
          break;
        case /* optional SC2APIProtocol.ScoreDetails score_details */ 8:
          message.scoreDetails = ScoreDetails.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.scoreDetails,
          );
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d,
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: Score,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* optional SC2APIProtocol.Score.ScoreType score_type = 6; */
    if (message.scoreType !== undefined)
      writer.tag(6, WireType.Varint).int32(message.scoreType);
    /* optional int32 score = 7; */
    if (message.score !== undefined)
      writer.tag(7, WireType.Varint).int32(message.score);
    /* optional SC2APIProtocol.ScoreDetails score_details = 8; */
    if (message.scoreDetails)
      ScoreDetails.internalBinaryWrite(
        message.scoreDetails,
        writer.tag(8, WireType.LengthDelimited).fork(),
        options,
      ).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer,
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message SC2APIProtocol.Score
 */
export const Score = new Score$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CategoryScoreDetails$Type extends MessageType<CategoryScoreDetails> {
  constructor() {
    super("SC2APIProtocol.CategoryScoreDetails", [
      {
        no: 1,
        name: "none",
        kind: "scalar",
        opt: true,
        T: 2 /*ScalarType.FLOAT*/,
      },
      {
        no: 2,
        name: "army",
        kind: "scalar",
        opt: true,
        T: 2 /*ScalarType.FLOAT*/,
      },
      {
        no: 3,
        name: "economy",
        kind: "scalar",
        opt: true,
        T: 2 /*ScalarType.FLOAT*/,
      },
      {
        no: 4,
        name: "technology",
        kind: "scalar",
        opt: true,
        T: 2 /*ScalarType.FLOAT*/,
      },
      {
        no: 5,
        name: "upgrade",
        kind: "scalar",
        opt: true,
        T: 2 /*ScalarType.FLOAT*/,
      },
    ]);
  }
  create(value?: PartialMessage<CategoryScoreDetails>): CategoryScoreDetails {
    const message = {};
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<CategoryScoreDetails>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CategoryScoreDetails,
  ): CategoryScoreDetails {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* optional float none */ 1:
          message.none = reader.float();
          break;
        case /* optional float army */ 2:
          message.army = reader.float();
          break;
        case /* optional float economy */ 3:
          message.economy = reader.float();
          break;
        case /* optional float technology */ 4:
          message.technology = reader.float();
          break;
        case /* optional float upgrade */ 5:
          message.upgrade = reader.float();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d,
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: CategoryScoreDetails,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* optional float none = 1; */
    if (message.none !== undefined)
      writer.tag(1, WireType.Bit32).float(message.none);
    /* optional float army = 2; */
    if (message.army !== undefined)
      writer.tag(2, WireType.Bit32).float(message.army);
    /* optional float economy = 3; */
    if (message.economy !== undefined)
      writer.tag(3, WireType.Bit32).float(message.economy);
    /* optional float technology = 4; */
    if (message.technology !== undefined)
      writer.tag(4, WireType.Bit32).float(message.technology);
    /* optional float upgrade = 5; */
    if (message.upgrade !== undefined)
      writer.tag(5, WireType.Bit32).float(message.upgrade);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer,
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message SC2APIProtocol.CategoryScoreDetails
 */
export const CategoryScoreDetails = new CategoryScoreDetails$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VitalScoreDetails$Type extends MessageType<VitalScoreDetails> {
  constructor() {
    super("SC2APIProtocol.VitalScoreDetails", [
      {
        no: 1,
        name: "life",
        kind: "scalar",
        opt: true,
        T: 2 /*ScalarType.FLOAT*/,
      },
      {
        no: 2,
        name: "shields",
        kind: "scalar",
        opt: true,
        T: 2 /*ScalarType.FLOAT*/,
      },
      {
        no: 3,
        name: "energy",
        kind: "scalar",
        opt: true,
        T: 2 /*ScalarType.FLOAT*/,
      },
    ]);
  }
  create(value?: PartialMessage<VitalScoreDetails>): VitalScoreDetails {
    const message = {};
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<VitalScoreDetails>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: VitalScoreDetails,
  ): VitalScoreDetails {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* optional float life */ 1:
          message.life = reader.float();
          break;
        case /* optional float shields */ 2:
          message.shields = reader.float();
          break;
        case /* optional float energy */ 3:
          message.energy = reader.float();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d,
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: VitalScoreDetails,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* optional float life = 1; */
    if (message.life !== undefined)
      writer.tag(1, WireType.Bit32).float(message.life);
    /* optional float shields = 2; */
    if (message.shields !== undefined)
      writer.tag(2, WireType.Bit32).float(message.shields);
    /* optional float energy = 3; */
    if (message.energy !== undefined)
      writer.tag(3, WireType.Bit32).float(message.energy);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer,
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message SC2APIProtocol.VitalScoreDetails
 */
export const VitalScoreDetails = new VitalScoreDetails$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScoreDetails$Type extends MessageType<ScoreDetails> {
  constructor() {
    super("SC2APIProtocol.ScoreDetails", [
      {
        no: 1,
        name: "idle_production_time",
        kind: "scalar",
        opt: true,
        T: 2 /*ScalarType.FLOAT*/,
      },
      {
        no: 2,
        name: "idle_worker_time",
        kind: "scalar",
        opt: true,
        T: 2 /*ScalarType.FLOAT*/,
      },
      {
        no: 3,
        name: "total_value_units",
        kind: "scalar",
        opt: true,
        T: 2 /*ScalarType.FLOAT*/,
      },
      {
        no: 4,
        name: "total_value_structures",
        kind: "scalar",
        opt: true,
        T: 2 /*ScalarType.FLOAT*/,
      },
      {
        no: 5,
        name: "killed_value_units",
        kind: "scalar",
        opt: true,
        T: 2 /*ScalarType.FLOAT*/,
      },
      {
        no: 6,
        name: "killed_value_structures",
        kind: "scalar",
        opt: true,
        T: 2 /*ScalarType.FLOAT*/,
      },
      {
        no: 7,
        name: "collected_minerals",
        kind: "scalar",
        opt: true,
        T: 2 /*ScalarType.FLOAT*/,
      },
      {
        no: 8,
        name: "collected_vespene",
        kind: "scalar",
        opt: true,
        T: 2 /*ScalarType.FLOAT*/,
      },
      {
        no: 9,
        name: "collection_rate_minerals",
        kind: "scalar",
        opt: true,
        T: 2 /*ScalarType.FLOAT*/,
      },
      {
        no: 10,
        name: "collection_rate_vespene",
        kind: "scalar",
        opt: true,
        T: 2 /*ScalarType.FLOAT*/,
      },
      {
        no: 11,
        name: "spent_minerals",
        kind: "scalar",
        opt: true,
        T: 2 /*ScalarType.FLOAT*/,
      },
      {
        no: 12,
        name: "spent_vespene",
        kind: "scalar",
        opt: true,
        T: 2 /*ScalarType.FLOAT*/,
      },
      {
        no: 13,
        name: "food_used",
        kind: "message",
        T: () => CategoryScoreDetails,
      },
      {
        no: 14,
        name: "killed_minerals",
        kind: "message",
        T: () => CategoryScoreDetails,
      },
      {
        no: 15,
        name: "killed_vespene",
        kind: "message",
        T: () => CategoryScoreDetails,
      },
      {
        no: 16,
        name: "lost_minerals",
        kind: "message",
        T: () => CategoryScoreDetails,
      },
      {
        no: 17,
        name: "lost_vespene",
        kind: "message",
        T: () => CategoryScoreDetails,
      },
      {
        no: 18,
        name: "friendly_fire_minerals",
        kind: "message",
        T: () => CategoryScoreDetails,
      },
      {
        no: 19,
        name: "friendly_fire_vespene",
        kind: "message",
        T: () => CategoryScoreDetails,
      },
      {
        no: 20,
        name: "used_minerals",
        kind: "message",
        T: () => CategoryScoreDetails,
      },
      {
        no: 21,
        name: "used_vespene",
        kind: "message",
        T: () => CategoryScoreDetails,
      },
      {
        no: 22,
        name: "total_used_minerals",
        kind: "message",
        T: () => CategoryScoreDetails,
      },
      {
        no: 23,
        name: "total_used_vespene",
        kind: "message",
        T: () => CategoryScoreDetails,
      },
      {
        no: 24,
        name: "total_damage_dealt",
        kind: "message",
        T: () => VitalScoreDetails,
      },
      {
        no: 25,
        name: "total_damage_taken",
        kind: "message",
        T: () => VitalScoreDetails,
      },
      {
        no: 26,
        name: "total_healed",
        kind: "message",
        T: () => VitalScoreDetails,
      },
      {
        no: 27,
        name: "current_apm",
        kind: "scalar",
        opt: true,
        T: 2 /*ScalarType.FLOAT*/,
      },
      {
        no: 28,
        name: "current_effective_apm",
        kind: "scalar",
        opt: true,
        T: 2 /*ScalarType.FLOAT*/,
      },
    ]);
  }
  create(value?: PartialMessage<ScoreDetails>): ScoreDetails {
    const message = {};
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<ScoreDetails>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: ScoreDetails,
  ): ScoreDetails {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* optional float idle_production_time */ 1:
          message.idleProductionTime = reader.float();
          break;
        case /* optional float idle_worker_time */ 2:
          message.idleWorkerTime = reader.float();
          break;
        case /* optional float total_value_units */ 3:
          message.totalValueUnits = reader.float();
          break;
        case /* optional float total_value_structures */ 4:
          message.totalValueStructures = reader.float();
          break;
        case /* optional float killed_value_units */ 5:
          message.killedValueUnits = reader.float();
          break;
        case /* optional float killed_value_structures */ 6:
          message.killedValueStructures = reader.float();
          break;
        case /* optional float collected_minerals */ 7:
          message.collectedMinerals = reader.float();
          break;
        case /* optional float collected_vespene */ 8:
          message.collectedVespene = reader.float();
          break;
        case /* optional float collection_rate_minerals */ 9:
          message.collectionRateMinerals = reader.float();
          break;
        case /* optional float collection_rate_vespene */ 10:
          message.collectionRateVespene = reader.float();
          break;
        case /* optional float spent_minerals */ 11:
          message.spentMinerals = reader.float();
          break;
        case /* optional float spent_vespene */ 12:
          message.spentVespene = reader.float();
          break;
        case /* optional SC2APIProtocol.CategoryScoreDetails food_used */ 13:
          message.foodUsed = CategoryScoreDetails.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.foodUsed,
          );
          break;
        case /* optional SC2APIProtocol.CategoryScoreDetails killed_minerals */ 14:
          message.killedMinerals = CategoryScoreDetails.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.killedMinerals,
          );
          break;
        case /* optional SC2APIProtocol.CategoryScoreDetails killed_vespene */ 15:
          message.killedVespene = CategoryScoreDetails.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.killedVespene,
          );
          break;
        case /* optional SC2APIProtocol.CategoryScoreDetails lost_minerals */ 16:
          message.lostMinerals = CategoryScoreDetails.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.lostMinerals,
          );
          break;
        case /* optional SC2APIProtocol.CategoryScoreDetails lost_vespene */ 17:
          message.lostVespene = CategoryScoreDetails.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.lostVespene,
          );
          break;
        case /* optional SC2APIProtocol.CategoryScoreDetails friendly_fire_minerals */ 18:
          message.friendlyFireMinerals =
            CategoryScoreDetails.internalBinaryRead(
              reader,
              reader.uint32(),
              options,
              message.friendlyFireMinerals,
            );
          break;
        case /* optional SC2APIProtocol.CategoryScoreDetails friendly_fire_vespene */ 19:
          message.friendlyFireVespene = CategoryScoreDetails.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.friendlyFireVespene,
          );
          break;
        case /* optional SC2APIProtocol.CategoryScoreDetails used_minerals */ 20:
          message.usedMinerals = CategoryScoreDetails.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.usedMinerals,
          );
          break;
        case /* optional SC2APIProtocol.CategoryScoreDetails used_vespene */ 21:
          message.usedVespene = CategoryScoreDetails.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.usedVespene,
          );
          break;
        case /* optional SC2APIProtocol.CategoryScoreDetails total_used_minerals */ 22:
          message.totalUsedMinerals = CategoryScoreDetails.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.totalUsedMinerals,
          );
          break;
        case /* optional SC2APIProtocol.CategoryScoreDetails total_used_vespene */ 23:
          message.totalUsedVespene = CategoryScoreDetails.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.totalUsedVespene,
          );
          break;
        case /* optional SC2APIProtocol.VitalScoreDetails total_damage_dealt */ 24:
          message.totalDamageDealt = VitalScoreDetails.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.totalDamageDealt,
          );
          break;
        case /* optional SC2APIProtocol.VitalScoreDetails total_damage_taken */ 25:
          message.totalDamageTaken = VitalScoreDetails.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.totalDamageTaken,
          );
          break;
        case /* optional SC2APIProtocol.VitalScoreDetails total_healed */ 26:
          message.totalHealed = VitalScoreDetails.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.totalHealed,
          );
          break;
        case /* optional float current_apm */ 27:
          message.currentApm = reader.float();
          break;
        case /* optional float current_effective_apm */ 28:
          message.currentEffectiveApm = reader.float();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d,
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: ScoreDetails,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* optional float idle_production_time = 1; */
    if (message.idleProductionTime !== undefined)
      writer.tag(1, WireType.Bit32).float(message.idleProductionTime);
    /* optional float idle_worker_time = 2; */
    if (message.idleWorkerTime !== undefined)
      writer.tag(2, WireType.Bit32).float(message.idleWorkerTime);
    /* optional float total_value_units = 3; */
    if (message.totalValueUnits !== undefined)
      writer.tag(3, WireType.Bit32).float(message.totalValueUnits);
    /* optional float total_value_structures = 4; */
    if (message.totalValueStructures !== undefined)
      writer.tag(4, WireType.Bit32).float(message.totalValueStructures);
    /* optional float killed_value_units = 5; */
    if (message.killedValueUnits !== undefined)
      writer.tag(5, WireType.Bit32).float(message.killedValueUnits);
    /* optional float killed_value_structures = 6; */
    if (message.killedValueStructures !== undefined)
      writer.tag(6, WireType.Bit32).float(message.killedValueStructures);
    /* optional float collected_minerals = 7; */
    if (message.collectedMinerals !== undefined)
      writer.tag(7, WireType.Bit32).float(message.collectedMinerals);
    /* optional float collected_vespene = 8; */
    if (message.collectedVespene !== undefined)
      writer.tag(8, WireType.Bit32).float(message.collectedVespene);
    /* optional float collection_rate_minerals = 9; */
    if (message.collectionRateMinerals !== undefined)
      writer.tag(9, WireType.Bit32).float(message.collectionRateMinerals);
    /* optional float collection_rate_vespene = 10; */
    if (message.collectionRateVespene !== undefined)
      writer.tag(10, WireType.Bit32).float(message.collectionRateVespene);
    /* optional float spent_minerals = 11; */
    if (message.spentMinerals !== undefined)
      writer.tag(11, WireType.Bit32).float(message.spentMinerals);
    /* optional float spent_vespene = 12; */
    if (message.spentVespene !== undefined)
      writer.tag(12, WireType.Bit32).float(message.spentVespene);
    /* optional SC2APIProtocol.CategoryScoreDetails food_used = 13; */
    if (message.foodUsed)
      CategoryScoreDetails.internalBinaryWrite(
        message.foodUsed,
        writer.tag(13, WireType.LengthDelimited).fork(),
        options,
      ).join();
    /* optional SC2APIProtocol.CategoryScoreDetails killed_minerals = 14; */
    if (message.killedMinerals)
      CategoryScoreDetails.internalBinaryWrite(
        message.killedMinerals,
        writer.tag(14, WireType.LengthDelimited).fork(),
        options,
      ).join();
    /* optional SC2APIProtocol.CategoryScoreDetails killed_vespene = 15; */
    if (message.killedVespene)
      CategoryScoreDetails.internalBinaryWrite(
        message.killedVespene,
        writer.tag(15, WireType.LengthDelimited).fork(),
        options,
      ).join();
    /* optional SC2APIProtocol.CategoryScoreDetails lost_minerals = 16; */
    if (message.lostMinerals)
      CategoryScoreDetails.internalBinaryWrite(
        message.lostMinerals,
        writer.tag(16, WireType.LengthDelimited).fork(),
        options,
      ).join();
    /* optional SC2APIProtocol.CategoryScoreDetails lost_vespene = 17; */
    if (message.lostVespene)
      CategoryScoreDetails.internalBinaryWrite(
        message.lostVespene,
        writer.tag(17, WireType.LengthDelimited).fork(),
        options,
      ).join();
    /* optional SC2APIProtocol.CategoryScoreDetails friendly_fire_minerals = 18; */
    if (message.friendlyFireMinerals)
      CategoryScoreDetails.internalBinaryWrite(
        message.friendlyFireMinerals,
        writer.tag(18, WireType.LengthDelimited).fork(),
        options,
      ).join();
    /* optional SC2APIProtocol.CategoryScoreDetails friendly_fire_vespene = 19; */
    if (message.friendlyFireVespene)
      CategoryScoreDetails.internalBinaryWrite(
        message.friendlyFireVespene,
        writer.tag(19, WireType.LengthDelimited).fork(),
        options,
      ).join();
    /* optional SC2APIProtocol.CategoryScoreDetails used_minerals = 20; */
    if (message.usedMinerals)
      CategoryScoreDetails.internalBinaryWrite(
        message.usedMinerals,
        writer.tag(20, WireType.LengthDelimited).fork(),
        options,
      ).join();
    /* optional SC2APIProtocol.CategoryScoreDetails used_vespene = 21; */
    if (message.usedVespene)
      CategoryScoreDetails.internalBinaryWrite(
        message.usedVespene,
        writer.tag(21, WireType.LengthDelimited).fork(),
        options,
      ).join();
    /* optional SC2APIProtocol.CategoryScoreDetails total_used_minerals = 22; */
    if (message.totalUsedMinerals)
      CategoryScoreDetails.internalBinaryWrite(
        message.totalUsedMinerals,
        writer.tag(22, WireType.LengthDelimited).fork(),
        options,
      ).join();
    /* optional SC2APIProtocol.CategoryScoreDetails total_used_vespene = 23; */
    if (message.totalUsedVespene)
      CategoryScoreDetails.internalBinaryWrite(
        message.totalUsedVespene,
        writer.tag(23, WireType.LengthDelimited).fork(),
        options,
      ).join();
    /* optional SC2APIProtocol.VitalScoreDetails total_damage_dealt = 24; */
    if (message.totalDamageDealt)
      VitalScoreDetails.internalBinaryWrite(
        message.totalDamageDealt,
        writer.tag(24, WireType.LengthDelimited).fork(),
        options,
      ).join();
    /* optional SC2APIProtocol.VitalScoreDetails total_damage_taken = 25; */
    if (message.totalDamageTaken)
      VitalScoreDetails.internalBinaryWrite(
        message.totalDamageTaken,
        writer.tag(25, WireType.LengthDelimited).fork(),
        options,
      ).join();
    /* optional SC2APIProtocol.VitalScoreDetails total_healed = 26; */
    if (message.totalHealed)
      VitalScoreDetails.internalBinaryWrite(
        message.totalHealed,
        writer.tag(26, WireType.LengthDelimited).fork(),
        options,
      ).join();
    /* optional float current_apm = 27; */
    if (message.currentApm !== undefined)
      writer.tag(27, WireType.Bit32).float(message.currentApm);
    /* optional float current_effective_apm = 28; */
    if (message.currentEffectiveApm !== undefined)
      writer.tag(28, WireType.Bit32).float(message.currentEffectiveApm);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer,
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message SC2APIProtocol.ScoreDetails
 */
export const ScoreDetails = new ScoreDetails$Type();
