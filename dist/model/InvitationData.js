"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InvitationDataAttributes = _interopRequireDefault(require("./InvitationDataAttributes"));

var _RelationshipServiceInvitationsCreate = _interopRequireDefault(require("./RelationshipServiceInvitationsCreate"));

var _TypeInvitation = _interopRequireDefault(require("./TypeInvitation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InvitationData model module.
 * @module model/InvitationData
 * @version 3.0.0-alpha1
 */
var InvitationData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvitationData</code>.
   * @alias module:model/InvitationData
   */
  function InvitationData() {
    _classCallCheck(this, InvitationData);

    InvitationData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InvitationData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InvitationData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvitationData} obj Optional instance to populate.
     * @return {module:model/InvitationData} The populated <code>InvitationData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvitationData();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _InvitationDataAttributes["default"].constructFromObject(data['attributes']);
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _RelationshipServiceInvitationsCreate["default"].constructFromObject(data['relationships']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeInvitation["default"].constructFromObject(data['type']);
        }
      }

      return obj;
    }
  }]);

  return InvitationData;
}();
/**
 * @member {module:model/InvitationDataAttributes} attributes
 */


InvitationData.prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipServiceInvitationsCreate} relationships
 */

InvitationData.prototype['relationships'] = undefined;
/**
 * @member {module:model/TypeInvitation} type
 */

InvitationData.prototype['type'] = undefined;
var _default = InvitationData;
exports["default"] = _default;